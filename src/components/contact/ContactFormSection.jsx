import ContactLeadForm from './ContactLeadForm.jsx'

export default function ContactFormSection() {
  return (
    <section id="lead-form" className="struktiva-contact-form-section" aria-labelledby="struktiva-contact-form-title">
      <div className="struktiva-contact-form-section__intro">
        <p className="struktiva-contact-eyebrow">Ihre Anfrage</p>
        <h2 id="struktiva-contact-form-title">Worum geht es in Ihrem Unternehmen?</h2>
        <p>
          Ein kurzer Überblick reicht für den Einstieg. Fehlende technische Details können später gemeinsam geklärt
          werden.
        </p>
      </div>
      <ContactLeadForm />
    </section>
  )
}
