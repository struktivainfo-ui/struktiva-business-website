import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { localSeoPages } from '../src/content/localSeoContent.js';
import { getRouteMeta } from '../src/routing/routeConfig.js';
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
    html = html.replace('Das passende Digital-Check-Formular nutzt die vorhandene STRUKTIVA-Lead-Verarbeitung. Es öffnet sich auf einer separaten, dauerhaft erreichbaren Adresse.', 'Das Formular nutzt die vorhandene STRUKTIVA-Lead-Verarbeitung. Ihre Anfrage wird persönlich geprüft.');
    html = html.replace(/(<div class="sub-callout">[\s\S]*?<\/div>)(<\/div><\/section>)/, (_, callout, closing) => `${callout}${digitalCheckForm}${closing}`);
    if (!html.includes('id="digital-check-anfrage"')) throw new Error('Digital-Check-Formular konnte nicht eingesetzt werden.');
    return addLeadAssets(html);
  }
  return html;
}

const zerionProject = `<section class="showcase showcase--dark" aria-labelledby="zerion-title"><div class="wrap showcase__layout"><div class="showcase__copy"><p class="eyebrow">Weiteres Projekt · ZERION Beyond</p><h2 id="zerion-title">Eine Marke mit<br><em>eigenem Charakter.</em></h2><p>Für ZERION Beyond entstand ein eigenständiger Webauftritt mit klarer Informationsstruktur, hochwertiger Markenwelt und direkten Kontaktwegen. Die Website ist unter eigener Domain erreichbar.</p><a class="showcase__link" href="https://zerion-beyond.de/" target="_blank" rel="noopener noreferrer">ZERION Beyond ansehen <span aria-hidden="true">↗</span></a></div><div class="showcase__visual showcase__visual--zerion" aria-hidden="true"><span class="showcase__visual-kicker">Science · Performance · Longevity</span><strong>ZERION<br><i>BEYOND</i></strong><span class="showcase__visual-line"></span><small>Digitaler Markenauftritt</small></div></div></section>`;

const salonAppProject = `<section class="showcase showcase--light" aria-labelledby="salon-app-title"><div class="wrap showcase__layout"><div class="showcase__visual showcase__visual--app" aria-hidden="true"><span class="showcase__visual-kicker">Salon Karola · Interne Anwendung</span><strong>Digitale Abläufe.<br><i>Geschützt im Betrieb.</i></strong><span class="showcase__visual-line"></span><small>Individuell entwickelt · nicht öffentlich verlinkt</small></div><div class="showcase__copy"><p class="eyebrow eyebrow--blue">Entwickelte Anwendung</p><h2 id="salon-app-title">Salon Karola:<br><em>mehr als eine Website.</em></h2><p>Zum Salon-Projekt gehört auch eine eigens entwickelte Anwendung für interne Abläufe. Da sie vertrauliche Daten verarbeitet, zeigen wir hier bewusst keinen Zugang und keine Inhalte der App.</p></div></div></section>`;

const customerReview = `<section class="showcase-review" aria-labelledby="review-title"><div class="wrap showcase-review__layout"><div><p class="eyebrow eyebrow--blue">Echte Rückmeldung</p><h2 id="review-title">Was die Zusammenarbeit<br><em>ausmacht.</em></h2></div><figure><div class="showcase-review__stars" aria-label="5 von 5 Sternen">★★★★★</div><blockquote>„Ich kann Struktiva wirklich nur weiterempfehlen. Meine Webseite ist richtig toll geworden und genauso, wie ich sie mir vorgestellt habe.“</blockquote><figcaption>Dennis Forschner · <a href="https://www.google.com/maps/contrib/103331501915897155785/reviews?hl=de" target="_blank" rel="noopener noreferrer">Originalbewertung auf Google ansehen ↗</a></figcaption></figure></div></section>`;

function addShowcase(html, route) {
  if (route === '' || route === '/praxisbeispiele') {
    const marker = '<section class="section section--paper" id="team">';
    const overviewMarker = '<section class="section section--paper"><div class="wrap"><div class="section-head"><div><p class="eyebrow eyebrow--blue">Eigenes STRUKTIVA-Projekt</p>';
    const target = route === '' ? marker : overviewMarker;
    if (!html.includes(target)) throw new Error(`Projekt-Einfügepunkt fehlt: ${route || '/'}`);
    html = html.replace(target, `${zerionProject}${salonAppProject}${customerReview}${target}`);
  }
  if (route === '/praxisbeispiele/salon-karola') {
    const marker = '<section class="cta">';
    if (!html.includes(marker)) throw new Error('Salon-App-Einfügepunkt fehlt.');
    html = html.replace(marker, `${salonAppProject}${marker}`);
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
      html = addShowcase(html, route);
      writeFileSync(join(target, entry.name), html);
    }
  }
}

copyPages(source, output);
cpSync(join(source, 'assets'), join(output, 'assets'), { recursive: true, force: true });
console.log('STRUKTIVA Vorschau-Seiten in den Vercel-Build übernommen.');
