import { afterRequestSteps } from './contactData.js'

export default function ContactAfterRequest() {
  return (
    <section className="struktiva-contact-after" aria-labelledby="struktiva-contact-after-title">
      <div className="struktiva-contact-section-heading">
        <h2 id="struktiva-contact-after-title">Was passiert nach Ihrer Anfrage?</h2>
      </div>
      <ol className="struktiva-contact-after__steps">
        {afterRequestSteps.map((step, index) => (
          <li key={step.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
