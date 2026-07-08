import { ArrowRight } from 'lucide-react'
import { directContactWays } from './contactData.js'

export default function ContactDirectWays() {
  return (
    <section id="direct-contact" className="struktiva-contact-direct" aria-labelledby="struktiva-contact-direct-title">
      <div>
        <p className="struktiva-contact-eyebrow">Direkte Kontaktmoeglichkeiten</p>
        <h2 id="struktiva-contact-direct-title">Waehlen Sie den Weg, der zu Ihrem Anliegen passt.</h2>
      </div>
      <div className="struktiva-contact-direct__list">
        {directContactWays.map((way) => (
          <a
            key={way.label}
            href={way.href}
            className="struktiva-contact-direct__link"
            target={way.external ? '_blank' : undefined}
            rel={way.external ? 'noreferrer' : undefined}
          >
            <span>{way.label}</span>
            <strong>{way.value}</strong>
            <small>{way.text}</small>
            <ArrowRight aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  )
}
