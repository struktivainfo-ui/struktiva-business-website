import ContactHero from '../components/contact/ContactHero.jsx'
import ContactDirectWays from '../components/contact/ContactDirectWays.jsx'
import ContactFormSection from '../components/contact/ContactFormSection.jsx'
import ContactAfterRequest from '../components/contact/ContactAfterRequest.jsx'

export default function ContactPage() {
  return (
    <main className="struktiva-contact-page">
      <ContactHero />
      <div className="struktiva-contact-page__body">
        <ContactDirectWays />
        <ContactFormSection />
        <ContactAfterRequest />
      </div>
    </main>
  )
}
