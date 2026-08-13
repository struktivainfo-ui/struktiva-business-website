import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react'
import { localSeoAreas } from '../../content/localSeoContent.js'

export function LocalSeoPage({ page, variant, children }) {
  return (
    <main className={`struktiva-local-seo struktiva-local-seo--${variant}`} data-route={page.path.slice(1)}>
      <LocalSeoHero page={page} variant={variant} />
      {children}
    </main>
  )
}

export function LocalSeoHero({ page, variant }) {
  const reducedMotion = useReducedMotion()
  return (
    <section className="struktiva-local-hero" aria-labelledby="local-seo-title">
      <div className="struktiva-local-shell">
        <nav className="struktiva-local-breadcrumb" aria-label="Brotkrümelnavigation">
          <a href="/">Start</a><span aria-hidden="true">/</span><span aria-current="page">{page.eyebrow}</span>
        </nav>
        <div className="struktiva-local-hero__grid">
          <motion.div initial={reducedMotion ? false : { opacity: 0, y: 18 }} animate={reducedMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="struktiva-local-eyebrow">{page.eyebrow}</p>
            <h1 id="local-seo-title">{page.title}</h1>
            <p className="struktiva-local-hero__lead">{page.lead}</p>
            <div className="struktiva-local-actions">
              <a className="struktiva-local-action struktiva-local-action--primary" href="/kontakt">
                Unverbindlich Kontakt aufnehmen <ArrowRight aria-hidden="true" />
              </a>
              <a className="struktiva-local-action struktiva-local-action--secondary" href="/digital-check">
                Digital-Check ansehen
              </a>
            </div>
          </motion.div>
          <motion.div className="struktiva-local-hero__system" aria-label={`Ablauf: ${page.flow.join(', ')}`} initial={reducedMotion ? false : { opacity: 0, x: 18 }} animate={reducedMotion ? undefined : { opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.08 }}>
            <p>{variant === 'trades' ? 'Vom Bedarf zur Anfrage' : variant === 'visibility' ? 'Vom Suchbedarf zum Kontakt' : variant === 'ai' ? 'Vom Anwendungsfall zur Kontrolle' : 'Zusammenhang statt Einzelmaßnahme'}</p>
            <ol>
              {page.flow.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></li>)}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function LocalSeoSection({ eyebrow, title, intro, tone = 'light', id, children, narrow = false }) {
  const reducedMotion = useReducedMotion()
  return (
    <motion.section id={id} className={`struktiva-local-section struktiva-local-section--${tone}`} aria-labelledby={id ? `${id}-title` : undefined} initial={reducedMotion ? false : { opacity: 0, y: 20 }} whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.48 }}>
      <div className={`struktiva-local-shell ${narrow ? 'struktiva-local-shell--narrow' : ''}`}>
        <div className="struktiva-local-section__heading">
          {eyebrow ? <p className="struktiva-local-eyebrow">{eyebrow}</p> : null}
          <h2 id={id ? `${id}-title` : undefined}>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </div>
        {children}
      </div>
    </motion.section>
  )
}

export function EditorialColumns({ items }) {
  return <div className="struktiva-local-editorial">{items.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
}

export function CheckList({ items, label }) {
  return <ul className="struktiva-local-checklist" aria-label={label}>{items.map((item) => <li key={item}><CheckCircle2 aria-hidden="true" /><span>{item}</span></li>)}</ul>
}

export function ProcessSteps({ steps }) {
  return <ol className="struktiva-local-process">{steps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol>
}

export function Journey({ steps }) {
  return <ol className="struktiva-local-journey" aria-label="Kundenweg">{steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></li>)}</ol>
}

export function RegionNote({ focus }) {
  return (
    <aside className="struktiva-local-region" aria-label="Regionale Zusammenarbeit">
      <div><p className="struktiva-local-eyebrow">Regional erreichbar</p><h2>Aus Calw-Wimberg für Unternehmen im Nordschwarzwald.</h2></div>
      <div><p>{focus}</p><ul aria-label="Regionen">{localSeoAreas.map((area) => <li key={area}>{area}</li>)}</ul></div>
    </aside>
  )
}

export function CaseStudyProof({ text }) {
  return (
    <aside className="struktiva-local-proof">
      <div><p className="struktiva-local-eyebrow">Belegbares Praxisbeispiel</p><h2>Salon Karola: digitale Bausteine schrittweise verbunden.</h2><p>{text}</p></div>
      <div className="struktiva-local-proof__actions">
        <a href="/praxisbeispiele/salon-karola">Praxisbeispiel ansehen <ArrowRight aria-hidden="true" /></a>
        <a href="https://salonkarola.de/" target="_blank" rel="noopener noreferrer">Website öffnen <ExternalLink aria-hidden="true" /></a>
      </div>
    </aside>
  )
}

export function FaqSection({ faqs }) {
  return (
    <LocalSeoSection eyebrow="Häufige Fragen" title="Klar beantwortet, bevor wir über eine Lösung sprechen." id="fragen" narrow>
      <div className="struktiva-local-faq">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
    </LocalSeoSection>
  )
}

export function RelatedLinks({ links }) {
  return <nav className="struktiva-local-related" aria-label="Passende Themen"><p>Passende Themen</p>{links.map((link) => <a key={link.href} href={link.href}>{link.label}<ArrowRight aria-hidden="true" /></a>)}</nav>
}

export function FinalCta({ title, text }) {
  return (
    <section className="struktiva-local-final" aria-labelledby="local-final-title"><div className="struktiva-local-shell"><p className="struktiva-local-eyebrow">Nächster sinnvoller Schritt</p><h2 id="local-final-title">{title}</h2><p>{text}</p><div className="struktiva-local-actions"><a className="struktiva-local-action struktiva-local-action--primary" href="/kontakt">Ist-Zustand besprechen <ArrowRight aria-hidden="true" /></a><a className="struktiva-local-action struktiva-local-action--secondary" href="/digital-check">Digital-Check nutzen</a></div></div></section>
  )
}
