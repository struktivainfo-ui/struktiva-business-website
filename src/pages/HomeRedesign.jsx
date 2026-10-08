import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { ArrowRight, Check, Globe2, MapPin, MessageCircle, Sparkles } from 'lucide-react'
import { confirmedPackages } from '../components/packages/packagesData.js'

const checkHref = '/digital-check#digital-check-anfrage'
const problems = [
  ['Ihre Website bringt zu wenig Anfragen', 'Besucher finden nicht schnell genug, was Sie anbieten und wie sie Kontakt aufnehmen können.'],
  ['Google, Website und Kontaktdaten arbeiten nicht sauber zusammen', 'Informationen und Kontaktwege unterscheiden sich. Der nächste Schritt bleibt unklar.'],
  ['Zu viele Abläufe werden immer wieder von Hand erledigt', 'Anfragen, Rückmeldungen und interne Aufgaben kosten mehr Zeit als nötig.'],
]
const solutions = [
  { title: 'Websites', text: 'Professionell auftreten und Anfragen einfacher machen', price: 'Website START ab 490 € netto', cta: 'Website-Lösungen ansehen', href: '/pakete', Icon: Globe2 },
  { title: 'Lokale Sichtbarkeit', text: 'Bei Google dort gefunden werden, wo Ihre Kunden suchen', price: 'ab 149 € netto / Monat', cta: 'Sichtbarkeit verbessern', href: '/google-sichtbarkeit-calw', Icon: MapPin },
  { title: 'Digitale Kundenführung', text: 'Anfragen, Kontakte und wiederkehrende Abläufe strukturieren', price: 'ab 349 € netto', cta: 'Kundenwege vereinfachen', href: '/digitale-kundenprozesse-calw', Icon: MessageCircle },
]
const journey = ['Gefunden werden', 'Website', 'Kontakt', 'Anfrage', 'Kunde', 'Bewertung']
const checkSteps = ['Anfrage senden', 'Wir prüfen', 'Sie erhalten konkrete Empfehlungen', 'Sie entscheiden']

function Reveal({ children, className = '', delay = 0 }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? false : { opacity: 1, y: 12 }} whileInView={reduced ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.46, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

function Action({ href, children, secondary = false }) {
  return <a className={`rd-button ${secondary ? 'rd-button--secondary' : 'rd-button--primary'}`} href={href}>{children}<ArrowRight aria-hidden="true" /></a>
}

function FlowScene() {
  return <div className="rd-flow" aria-hidden="true">
    <div className="rd-flow__browser">
      <div className="rd-flow__chrome"><span /><span /><span /><b>Ihr Unternehmen</b></div>
      <div className="rd-flow__screen"><i /><i /><i /><b>Kontakt aufnehmen</b></div>
    </div>
    <div className="rd-flow__rail">
      {[[Globe2, 'Website'], [MapPin, 'Google'], [MessageCircle, 'Anfrage'], [Check, 'Kunde']].map(([Icon, label]) => <div className="rd-flow__step" key={label}><Icon /><span>{label}</span></div>)}
    </div>
    <p><span /> Ein klarer Weg vom ersten Blick bis zur Anfrage</p>
  </div>
}

function Process() {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 45%'] })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 24 })
  return <section className="rd-section rd-process" ref={ref} aria-labelledby="rd-process-title"><div className="rd-container">
    <Reveal className="rd-heading"><p className="rd-eyebrow">Das Zusammenspiel</p><h2 id="rd-process-title">Aus einzelnen Klicks wird ein klarer Kundenweg.</h2><p>Jeder Schritt soll zum nächsten führen. Wir prüfen, wo Informationen fehlen und wo Abläufe einfacher werden können.</p></Reveal>
    <ol className="rd-process__list"><motion.span className="rd-process__line" aria-hidden="true" style={reduced ? { scaleX: 1 } : { scaleX }} />{journey.map((step, i) => <li key={step}><span>{String(i + 1).padStart(2, '0')}</span><strong>{step}</strong></li>)}</ol>
  </div></section>
}

export default function HomeRedesign() {
  return <main className="rd-home">
    <section className="rd-hero" id="start" aria-labelledby="rd-hero-title"><div className="rd-container rd-hero__grid">
      <div className="rd-hero__copy"><p className="rd-eyebrow">Digitale Unternehmensberatung aus Calw</p><h1 id="rd-hero-title">Mehr Anfragen.<br />Klare digitale Abläufe.<br /><em>Weniger Chaos.</em></h1><p className="rd-hero__lead">STRUKTIVA verbindet Websites, lokale Google-Sichtbarkeit und digitale Kundenprozesse für kleine Unternehmen.</p><div className="rd-actions"><Action href={checkHref}>Kostenlosen Digital-Check starten</Action><Action href="/pakete" secondary>Pakete &amp; Preise</Action></div><p className="rd-hero__trust">Persönlich aus Calw <span>·</span> klare Einstiegspreise <span>·</span> keine unnötigen Komplettlösungen</p></div>
      <FlowScene />
    </div></section>
    <section className="rd-proof" aria-label="Was Sie bei STRUKTIVA erwartet"><div className="rd-container"><span>Persönliche Ansprechpartner</span><span>Transparente Einstiegspreise</span><span>Websites, Sichtbarkeit und Kundenwege aus einer Hand</span></div></section>
    <section className="rd-section rd-problems" aria-labelledby="rd-problems-title"><div className="rd-container"><Reveal className="rd-heading"><p className="rd-eyebrow">Kommt Ihnen das bekannt vor?</p><h2 id="rd-problems-title">Drei Stellen, an denen digitaler Aufwand entsteht.</h2></Reveal><div className="rd-problems__grid">{problems.map(([title, text], i) => <Reveal className="rd-problem" key={title} delay={i * 0.06}><span className="rd-number">0{i + 1}</span><div className="rd-problem__visual" aria-hidden="true"><i /><i /><i /></div><h3>{title}</h3><p>{text}</p></Reveal>)}</div><p className="rd-problems__close">Genau hier setzt STRUKTIVA an.</p></div></section>
    <section className="rd-section rd-solutions" aria-labelledby="rd-solutions-title"><div className="rd-container"><Reveal className="rd-heading"><p className="rd-eyebrow">Unsere Lösungen</p><h2 id="rd-solutions-title">Klein anfangen. Sinnvoll verbinden.</h2><p>Drei Bausteine, die zum Betrieb und zum tatsächlichen Bedarf passen.</p></Reveal><div className="rd-solutions__grid">{solutions.map(({ title, text, price, cta, href, Icon }, i) => <Reveal className="rd-solution" key={title} delay={i * 0.06}><div className="rd-solution__top"><span>0{i + 1}</span><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p><strong>{price}</strong><a href={href}>{cta}<ArrowRight aria-hidden="true" /></a></Reveal>)}</div></div></section>
    <section className="rd-section rd-prices" aria-labelledby="rd-prices-title"><div className="rd-container rd-prices__grid"><Reveal><p className="rd-eyebrow">Einstiegspreise</p><h2 id="rd-prices-title">Planbar beginnen.</h2><p>Ein klarer Einstieg für Website, Sichtbarkeit und Kundenführung. Den genauen Umfang klären wir vorab.</p><a className="rd-text-link" href="/pakete">Alle Pakete und Leistungen ansehen <ArrowRight aria-hidden="true" /></a></Reveal><div className="rd-prices__table">{confirmedPackages.map(item => <div className="rd-prices__row" key={item.title}><span>{item.title}</span><strong>{item.price} <small>netto{item.cadence === 'pro Monat' ? ' / Monat' : ''}</small></strong></div>)}<p>Website START alternativ in 2 × 245 € netto.</p></div></div></section>
    <Process />
    <section className="rd-section rd-case" aria-labelledby="rd-case-title"><div className="rd-container rd-case__grid"><Reveal className="rd-case__media"><div className="rd-case__laptop"><div><i /><i /><i /></div><img src="/images/salon-karola-site.jpg" alt="Startseite der Website von Salon Karola" loading="lazy" decoding="async" /></div><div className="rd-case__phone"><img src="/images/salon-karola-site.jpg" alt="" loading="lazy" decoding="async" /></div></Reveal><Reveal className="rd-case__copy"><p className="rd-eyebrow">Ein echtes Projekt</p><h2 id="rd-case-title">Praxisbeispiel: Salon Karola</h2><dl><div><dt>Ausgangslage</dt><dd>Der lokale Friseursalon brauchte einen klaren digitalen Auftritt und einfache Kontaktwege.</dd></div><div><dt>Umsetzung</dt><dd>Mobil nutzbare Website mit Leistungsübersicht, Standort, Kontaktmöglichkeiten und Grundlagen für lokale Sichtbarkeit.</dd></div><div><dt>Nutzen</dt><dd>Interessenten finden wichtige Informationen und können ihren Terminwunsch über den passenden Weg senden.</dd></div></dl><Action href="/praxisbeispiele/salon-karola" secondary>Praxisbeispiel ansehen</Action></Reveal></div></section>
    <section className="rd-section rd-check" aria-labelledby="rd-check-title"><div className="rd-container rd-check__grid"><Reveal><p className="rd-eyebrow">Kostenloser Digital-Check</p><h2 id="rd-check-title">Nicht sicher, wo Sie anfangen sollen?</h2><p className="rd-check__lead">Der kostenlose Digital-Check zeigt Ihnen, welche digitalen Baustellen zuerst sinnvoll sind.</p><Action href={checkHref}>Kostenlosen Digital-Check anfragen</Action><p className="rd-check__note">Kostenlos · unverbindlich · keine Verkaufspflicht</p></Reveal><ol className="rd-check__steps">{checkSteps.map((step, i) => <li key={step}><span>0{i + 1}</span><strong>{step}</strong></li>)}</ol></div></section>
    <section className="rd-section rd-about" aria-labelledby="rd-about-title"><div className="rd-container rd-about__grid"><Reveal className="rd-about__portrait"><img src="/images/inhaber-sven-jessica.webp" alt="Sven Matzke und Jessica Wacker von STRUKTIVA" loading="lazy" decoding="async" /></Reveal><Reveal className="rd-about__copy"><p className="rd-eyebrow">Über STRUKTIVA</p><h2 id="rd-about-title">Persönlich. Verständlich. Aus Calw.</h2><p>Sven Matzke und Jessica Wacker begleiten kleine Unternehmen mit klarer Beratung und pragmatischen digitalen Lösungen. Sie sprechen direkt mit den Menschen, die Ihr Projekt verstehen und weiterentwickeln.</p><a className="rd-text-link" href="/ueber-uns">STRUKTIVA kennenlernen <ArrowRight aria-hidden="true" /></a></Reveal></div></section>
    <section className="rd-section rd-final" aria-labelledby="rd-final-title"><div className="rd-container"><Sparkles aria-hidden="true" /><h2 id="rd-final-title">Bringen wir Struktur in Ihren digitalen Auftritt.</h2><p>Ein kurzer Blick auf Website, Sichtbarkeit und Kundenwege zeigt, welcher nächste Schritt sinnvoll ist.</p><Action href={checkHref}>Kostenlosen Digital-Check starten</Action></div></section>
  </main>
}
