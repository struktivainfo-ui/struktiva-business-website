import { messagePrompts } from './contactData.js'

export default function ContactPreparation() {
  return (
    <section className="struktiva-contact-preparation" aria-labelledby="struktiva-contact-preparation-title">
      <div className="struktiva-contact-section-heading">
        <p className="struktiva-contact-eyebrow">Was Sie uns schreiben koennen</p>
        <h2 id="struktiva-contact-preparation-title">Sie muessen keine technische Aufgabenbeschreibung vorbereiten.</h2>
        <p>
          Beschreiben Sie Ihr Anliegen in Alltagssprache. Entscheidend ist zuerst, was im Unternehmen heute schwierig,
          unklar oder unnoetig aufwendig ist.
        </p>
      </div>
      <ul className="struktiva-contact-preparation__list">
        {messagePrompts.map((prompt) => (
          <li key={prompt}>{prompt}</li>
        ))}
      </ul>
    </section>
  )
}
