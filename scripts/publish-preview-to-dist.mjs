import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { localSeoPages } from '../src/content/localSeoContent.js';
import { getRouteMeta } from '../src/routing/routeConfig.js';
import { confirmedPackages } from '../src/components/packages/packagesData.js';
import { contactForm, digitalCheckForm } from './lead-form-markup.mjs';

const root = resolve(import.meta.dirname, '..');
const source = join(root, 'wix-preview');
const output = join(root, 'dist');
const localSeoPaths = new Set(Object.values(localSeoPages).map((page) => page.path));

if (!existsSync(join(source, 'index.html')) || !existsSync(output)) {
  throw new Error('Website-Vorschau oder Build-Ausgabe fehlt.');
}

function escapeAttribute(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
}

function replaceHeadTag(html, pattern, tag) {
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `${tag}</head>`);
}

function preserveLocalSeo(html, route) {
  if (!localSeoPaths.has(route)) return html;
  const meta = getRouteMeta(route);
  const canonical = `https://struktiva.de${route}`;
  html = replaceHeadTag(html, /<title>[\s\S]*?<\/title>/i, `<title>${escapeAttribute(meta.title)}</title>`);
  html = replaceHeadTag(html, /<meta\s+name="description"[^>]*>/i, `<meta name="description" content="${escapeAttribute(meta.description)}">`);
  html = replaceHeadTag(html, /<meta\s+name="robots"[^>]*>/i, '<meta name="robots" content="index, follow">');
  html = replaceHeadTag(html, /<link\s+rel="canonical"[^>]*>/i, `<link rel="canonical" href="${canonical}">`);
  html = replaceHeadTag(html, /<meta\s+property="og:url"[^>]*>/i, `<meta property="og:url" content="${canonical}">`);
  if (meta.structuredData) {
    const json = JSON.stringify(meta.structuredData).replaceAll('<', '\\u003c');
    html = html.replace('</head>', `<script id="struktiva-route-structured-data" type="application/ld+json">${json}</script></head>`);
  }
  return html;
}

function setPublicIndexing(html, route) {
  if (route === '/digital-check/danke') return html;
  const canonical = `https://struktiva.de${route || '/'}`;
  if (route === '') {
    html = replaceHeadTag(html, /<meta\s+name="robots"[^>]*>/i, '<meta name="robots" content="index, follow">');
  }
  return replaceHeadTag(html, /<link\s+rel="canonical"[^>]*>/i, `<link rel="canonical" href="${canonical}">`);
}

function addLeadAssets(html) {
  return html
    .replace('</head>', '<link rel="stylesheet" href="/assets/lead-forms.css"></head>')
    .replace('</body>', '<script src="/assets/lead-forms.js" defer></script></body>');
}

function installLeadForm(html, route) {
  const legacyHost = 'https://struktiva-business-website-q6bkodgw2-struktivainfo-uis-projects.vercel.app';
  if (route === '/kontakt') {
    html = html.replace(/<div class="lead-embed">[\s\S]*?<\/div><p class="lead-fallback">[\s\S]*?<\/p>/, contactForm);
    if (!html.includes('id="lead-contact-form"')) throw new Error('Kontaktformular konnte nicht eingesetzt werden.');
    html = html.replaceAll(`${legacyHost}/kontakt#lead-form`, '#leadformular');
    html = html.replace('Zum bestehenden Anfrageformular →', 'Zum Anfrageformular →');
    html = html.replace('Das Anfrageformular ist direkt eingebunden. Ihre Angaben laufen über die bestehende STRUKTIVA-Lead-Verarbeitung.', 'Ihre Anfrage wird direkt über die bestehende STRUKTIVA-Lead-Verarbeitung gesendet.');
    return addLeadAssets(html);
  }
  if (route === '/digital-check') {
    html = html.replaceAll(`${legacyHost}/digital-check#digital-check-anfrage`, '#digital-check-anfrage');
    html = html.replace('Das passende Digital-Check-Formular nutzt die vorhandene STRUKTIVA-Lead-Verarbeitung. Es öffnet sich auf einer separaten, dauerhaft erreichbaren Adresse.', 'Der Digital-Check ist kostenlos und unverbindlich. Sie erhalten eine persönliche Prüfung mit priorisierten nächsten Schritten, einen kompakten Bericht und ein Ergebnisgespräch von bis zu 30 Minuten. Nach Eingang aller benötigten Informationen erhalten Sie das Ergebnis innerhalb von fünf Werktagen. Die Umsetzung ist nicht enthalten; ein Folgeauftrag ist freiwillig.');
    html = html.replace(/(<div class="sub-callout">[\s\S]*?<\/div>)(<\/div><\/section>)/, (_, callout, closing) => `${callout}${digitalCheckForm}${closing}`);
    if (!html.includes('id="digital-check-anfrage"')) throw new Error('Digital-Check-Formular konnte nicht eingesetzt werden.');
    return addLeadAssets(html);
  }
  return html;
}

function replaceCardLinks(html, route, specs) {
  let index = 0;
  const updated = html.replace(/<article class="sub-card reveal">[\s\S]*?<\/article>/g, (card) => {
    const spec = specs[index++];
    if (!spec) return card;
    return card.replace(/<a class="sub-link" href="[^"]*">[^<]*(<span aria-hidden="true">→<\/span><\/a>)/, `<a class="sub-link" href="${spec.href}">${spec.label} $1`);
  });
  if (index !== specs.length) throw new Error(`Erwartete ${specs.length} Karten auf ${route}, gefunden: ${index}.`);
  return updated;
}

function addPackageScopes(html) {
  let index = 0;
  const updated = html.replace(/<article class="sub-card reveal">[\s\S]*?<\/article>/g, (card) => {
    const item = confirmedPackages[index++];
    if (!item) return card;
    const includes = item.includes.map((point) => `<li>${escapeAttribute(point)}</li>`).join('');
    const scope = `<div class="package-scope"><p class="package-scope__label">Enthalten</p><ul class="package-scope__list">${includes}</ul><p class="package-scope__limit"><strong>Abgrenzung:</strong> ${escapeAttribute(item.excludes)}</p></div>`;
    return card
      .replace(/<p>(?!<p class="eyebrow)[\s\S]*?<\/p>/, `<p>${escapeAttribute(item.fit)}</p>`)
      .replace('<a class="sub-link"', `${scope}<a class="sub-link"`);
  });
  if (index !== confirmedPackages.length) throw new Error(`Paketdetails unvollständig: ${index} von ${confirmedPackages.length} Karten gefunden.`);
  return updated;
}

function improvePageMessaging(html, route) {
  if (route === '') {
    html = html.replace('Digitale Unternehmensberatung · Calw &amp; deutschlandweit', 'Für kleine Unternehmen und Betriebe · Calw &amp; deutschlandweit');
    html = html.replace('Ein digitaler Auftritt, der Leistungen, Standort und Kontaktmöglichkeiten zusammenführt und Terminwünsche verständlich leitet.', 'Für Salon Karola entstand eine mobile Website mit Leistungen, Standort und Kontaktwegen. Google-Präsenz, Bewertungs- und QR-Wege, eine digitale Kundenkarte und eine interne Anwendung ergänzen den Salonalltag.');
    html = html.replace('<strong>Ausgangslage</strong><span>Eine mobil nutzbare Präsenz und einfache Kontaktwege waren gefragt.</span>', '<strong>Website &amp; Auffindbarkeit</strong><span>Leistungsinformationen, Standort, mobile Website, Google-Präsenz sowie Bewertungs- und QR-Wege.</span>');
    html = html.replace('<strong>Umsetzung</strong><span>Leistungen, Standortinformationen und Anfragewege in einer klaren Website gebündelt.</span>', '<strong>Kontakt &amp; Bindung</strong><span>Telefon, WhatsApp, digitale Anfrage sowie mobile Kundenkarte mit Bonusstruktur.</span>');
    html = html.replace('<strong>Ansatz</strong><span>Passend zum Betrieb und seinem Alltag – ohne unnötige Komplexität.</span>', '<strong>Interne Abläufe</strong><span>Eine eigens entwickelte Anwendung unterstützt den Salonalltag. App-Zugang und Kundendaten bleiben geschützt.</span>');
  }
  if (route === '/leistungen') {
    html = replaceCardLinks(html, route, [
      { href: '/praxisbeispiele/salon-karola/index.html', label: 'Website-Projekt ansehen' },
      { href: '/google-sichtbarkeit-calw/index.html', label: 'Google-Sichtbarkeit ansehen' },
      { href: '/digitale-kundenprozesse-calw/index.html', label: 'Kundenwege ansehen' },
      { href: '/praxisbeispiele/salon-karola/index.html#salon-project-details', label: 'Bewertungen im Projekt ansehen' },
      { href: '/praxisbeispiele/salon-karola/index.html#interne-anwendung', label: 'Interne Anwendung ansehen' },
      { href: '/ki-automatisierung-calw/index.html', label: 'Automatisierung ansehen' },
    ]);
  }
  if (route === '/pakete') {
    html = replaceCardLinks(html, route, [
      { href: '/kontakt/index.html?paket=website-start#leadformular', label: 'Website START anfragen' },
      { href: '/kontakt/index.html?paket=website-plus#leadformular', label: 'Website PLUS anfragen' },
      { href: '/kontakt/index.html?paket=website-individuell#leadformular', label: 'Projekt besprechen' },
      { href: '/kontakt/index.html?paket=sichtbarkeit-start#leadformular', label: 'Sichtbarkeit START anfragen' },
      { href: '/kontakt/index.html?paket=sichtbarkeit-plus#leadformular', label: 'Sichtbarkeit PLUS anfragen' },
      { href: '/kontakt/index.html?paket=kundenfuehrung#leadformular', label: 'Kundenführung anfragen' },
    ]);
    html = addPackageScopes(html);
  }
  if (route === '/praxisbeispiele/salon-karola') {
    html = html.replace(/(<p class="hero__lead">)[\s\S]*?(<\/p>)/, '$1Website, Google-Präsenz, Kontakt- und Bewertungswege, mobile Kundenkarte und interne Anwendung – als zusammenhängende digitale Unterstützung für den Salonalltag.$2');
    html = html.replace('Für Salon Karola entstand eine Website, auf der Besucher Leistungen, Standort und Kontaktmöglichkeiten schnell erfassen können. Der Terminwunsch führt über einen nachvollziehbaren nächsten Schritt.', 'Die Website auf salonkarola.de bündelt Leistungen, Standort und Kontakt. Telefon, WhatsApp, digitale Anfragen sowie Bewertungs- und QR-Wege ergänzen den öffentlichen Kundenweg.');
    html = html.replace('<strong>Aufgabe</strong><span>Eine mobil nutzbare Präsenz mit einfachen Kontaktwegen.</span>', '<strong>Website &amp; Auffindbarkeit</strong><span>Mobile Website, Leistungsinformationen, Standort, Google-Präsenz und Bewertungswege.</span>');
    html = html.replace('<strong>Umsetzung</strong><span>Leistungen und wichtige Informationen übersichtlich gebündelt.</span>', '<strong>Kontakt &amp; Kundenbindung</strong><span>Telefon, WhatsApp, digitale Anfrage sowie mobile Kundenkarte mit Bonusstruktur.</span>');
    html = html.replace('<strong>Ergebnis</strong><span>Ein klarer digitaler Einstieg in den Kontakt mit dem Salon.</span>', '<strong>Interne Abläufe</strong><span>Eine eigens entwickelte Anwendung unterstützt den Betrieb; der Zugang bleibt vertraulich.</span>');
  }
  if (route === '/digital-check') {
    const cards = [
      ['01 / ÜBERBLICK', 'Website, Google & Kontaktwege', 'Wir prüfen einen Webauftritt auf dem Smartphone, das Google-Unternehmensprofil (falls vorhanden), die wichtigsten Kontaktwege und die sichtbare Bewertungsdarstellung.'],
      ['02 / PRIORITÄTEN', 'Ein klarer Maßnahmenplan', 'Sie erhalten eine verständliche Zusammenfassung mit priorisierten Schritten: was zuerst, danach und später sinnvoll ist.'],
      ['03 / BESPRECHUNG', 'Persönlich besprechen', 'Wir gehen die wichtigsten Punkte in einem persönlichen Ergebnisgespräch von bis zu 30 Minuten durch.'],
    ];
    let index = 0;
    html = html.replace(/<article class="sub-card reveal">[\s\S]*?<\/article>/g, (card) => {
      const [eyebrow, title, description] = cards[index++] ?? [];
      if (!eyebrow) return card;
      return card
        .replace(/<p class="eyebrow eyebrow--blue">[\s\S]*?<\/p>/, `<p class="eyebrow eyebrow--blue">${eyebrow}</p>`)
        .replace(/<h3>[\s\S]*?<\/h3>/, `<h3>${title}</h3>`)
        .replace(/<p>(?!<p class="eyebrow)[\s\S]*?<\/p>/, `<p>${description}</p>`)
        .replace(/<a class="sub-link"[\s\S]*?<\/a>/, '');
    });
    if (index !== cards.length) throw new Error('Digital-Check-Abschnitte konnten nicht aktualisiert werden.');
    html = html.replace(/(<p class="hero__lead">)[\s\S]*?(<\/p>)/, '$1Kostenloser, persönlicher Blick auf Website, Google-Profil, Kontaktwege und Bewertungen – mit klar priorisierten nächsten Schritten für Ihren Betrieb.$2');
  }
  return html;
}

const zerionProject = `<section class="showcase showcase--dark" aria-labelledby="zerion-title"><div class="wrap showcase__layout"><div class="showcase__copy"><p class="eyebrow">Projekt · ZERION Beyond</p><h2 id="zerion-title">Marke und Webauftritt<br><em>aus einem Guss.</em></h2><p>Für ZERION Beyond wurde eine eigenständige Markenwebsite für wissenschaftlich orientierte Inhalte zu Performance, Regeneration und Longevity entwickelt. Die Informationsstruktur führt Besucher durch die Themen bis zum passenden Kontaktweg.</p><ul class="showcase__scope" aria-label="Umgesetzte Bausteine für ZERION Beyond"><li>Markenauftritt und Webdesign</li><li>Seitenstruktur und mobile Darstellung</li><li>Kontaktstrecke und digitale QR-Visitenkarte</li><li>Eigene .de-Domain und technische Veröffentlichung</li></ul><a class="showcase__link" href="https://zerion-beyond.de/" target="_blank" rel="noopener noreferrer">ZERION Beyond ansehen <span aria-hidden="true">↗</span></a></div><div class="showcase__visual showcase__visual--zerion"><img class="showcase__visual-image" src="/images/zerion-beyond-cover.webp" alt="Bildmotiv aus der öffentlichen ZERION-Beyond-Website mit Mikroskop und wissenschaftlicher Forschungsvisualisierung" loading="lazy"><span class="showcase__visual-kicker">Science · Performance · Longevity</span><strong>ZERION<br><i>BEYOND</i></strong><span class="showcase__visual-line"></span><small>Bildwelt aus zerion-beyond.de</small></div></div></section>`;

const salonAppProject = `<section class="showcase showcase--light" id="interne-anwendung" aria-labelledby="salon-app-title"><div class="wrap showcase__layout"><div class="showcase__visual showcase__visual--app" aria-hidden="true"><span class="showcase__visual-kicker">Salon Karola · Interne Anwendung</span><strong>Digitale Abläufe.<br><i>Geschützt im Betrieb.</i></strong><span class="showcase__visual-line"></span><small>Individuell entwickelt · kein öffentlicher App-Zugang</small></div><div class="showcase__copy"><p class="eyebrow eyebrow--blue">Ergänzung zum Praxisprojekt</p><h2 id="salon-app-title">Salon Karola:<br><em>mehr als eine Website.</em></h2><p>Zur Website gehören digitale Kundenbindung und eine eigens entwickelte interne Salon-Anwendung. Sie unterstützt betriebliche Abläufe; wegen der vertraulichen Kundendaten zeigen wir keinen Login, keine Screenshots und keinen öffentlichen App-Zugang.</p><ul class="showcase__scope" aria-label="Digitale Bausteine im Salon-Karola-Projekt"><li>Website mit Leistungen, Standort und Kontakt</li><li>Bewertungswege und QR-Strukturen</li><li>Digitale Kundenkarte und Bonusstruktur</li><li>Interne Anwendung für Salonabläufe</li></ul></div></div></section>`;

const salonProjectDetails = `<section class="section section--paper" id="salon-project-details"><div class="wrap"><div class="section-head"><div><p class="eyebrow eyebrow--blue">Was umgesetzt wurde</p><h2 class="section-head__title">Ein Salonprojekt<br><em>mit mehreren Bausteinen.</em></h2></div><p class="section-head__copy">Die Website auf salonkarola.de bildet den öffentlichen Einstieg. Google-Präsenz, Kontakt, Kundenbindung und geschützte interne Abläufe ergänzen den Kundenweg.</p></div><div class="friction"><article class="friction__item"><span class="friction__num">01 — WEBSITE &amp; AUFFINDBARKEIT</span><h3>Information &amp; Vertrauen</h3><p>Leistungen, Standort, mobile Nutzung, Google-Präsenz sowie Bewertungs- und QR-Wege.</p></article><article class="friction__item"><span class="friction__num">02 — KONTAKT &amp; BINDUNG</span><h3>Kontakt &amp; Wiederkehr</h3><p>Telefon, WhatsApp und digitale Anfragen; ergänzt um eine mobile Kundenkarte mit Bonusstruktur.</p></article><article class="friction__item"><span class="friction__num">03 — INTERNE ABLÄUFE</span><h3>Geschützt im Salonalltag</h3><p>Eine eigens entwickelte interne Anwendung unterstützt betriebliche Abläufe. Kundendaten und App-Zugang bleiben geschützt.</p></article></div></div></section>`;

const customerReview = `<section class="showcase-review" aria-labelledby="review-title"><div class="wrap showcase-review__layout"><div><p class="eyebrow eyebrow--blue">Google-Bewertung</p><h2 id="review-title">Nachfragen.<br><em>Aufnehmen. Umsetzen.</em></h2></div><figure><div class="showcase-review__stars" aria-label="5 von 5 Sternen">★★★★★</div><blockquote>„Eigene Ideen werden aufgenommen und richtig gut umgesetzt. Auch wenn man zwischendurch noch etwas ändern möchte, wird darauf sofort eingegangen.“</blockquote><figcaption>Dennis Forschner · <a href="https://www.google.com/maps/contrib/103331501915897155785/reviews?hl=de" target="_blank" rel="noopener noreferrer">Google-Bewertung ansehen ↗</a></figcaption></figure></div></section>`;

function addShowcase(html, route) {
  if (route === '' || route === '/praxisbeispiele') {
    const homeMarker = '<section class="section section--light"><div class="wrap case"><div class="case__visual reveal"><div class="case__window"><img src="https://static.wixstatic.com/media/7bcb5c_7606feec393c4cc38569a0baffaeef0d~mv2.jpg"';
    const overviewMarker = '<section class="section section--paper"><div class="wrap"><div class="section-head"><div><p class="eyebrow eyebrow--blue">Eigenes STRUKTIVA-Projekt</p>';
    const target = route === '' ? homeMarker : overviewMarker;
    if (!html.includes(target)) throw new Error(`Projekt-Einfügepunkt fehlt: ${route || '/'}`);
    html = html.replace(target, `${zerionProject}${salonAppProject}${customerReview}${target}`);
  }
  if (route === '/praxisbeispiele/salon-karola') {
    const marker = '<section class="cta">';
    if (!html.includes(marker)) throw new Error('Salon-App-Einfügepunkt fehlt.');
    html = html.replace(marker, `${salonProjectDetails}${salonAppProject}${marker}`);
  }
  if (route === '' || route === '/praxisbeispiele' || route === '/praxisbeispiele/salon-karola') {
    html = html.replace('</head>', '<link rel="stylesheet" href="/assets/project-showcase.css"></head>');
  }
  return html;
}

function copyPages(directory, target, route = '') {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (entry.name === 'assets') continue;
      copyPages(join(directory, entry.name), join(target, entry.name), `${route}/${entry.name}`);
    } else if (entry.name === 'index.html') {
      mkdirSync(target, { recursive: true });
      let html = readFileSync(join(directory, entry.name), 'utf8');
      html = preserveLocalSeo(html, route);
      html = setPublicIndexing(html, route);
      html = installLeadForm(html, route);
      html = improvePageMessaging(html, route);
      html = addShowcase(html, route);
      writeFileSync(join(target, entry.name), html);
    }
  }
}

copyPages(source, output);
cpSync(join(source, 'assets'), join(output, 'assets'), { recursive: true, force: true });
console.log('STRUKTIVA Vorschau-Seiten in den Vercel-Build übernommen.');
