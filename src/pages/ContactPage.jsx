import ContactHero from '../components/contact/ContactHero.jsx'
import ContactStartOptions from '../components/contact/ContactStartOptions.jsx'
import ContactDirectWays from '../components/contact/ContactDirectWays.jsx'
import ContactPreparation from '../components/contact/ContactPreparation.jsx'
import ContactFormSection from '../components/contact/ContactFormSection.jsx'
import ContactAfterRequest from '../components/contact/ContactAfterRequest.jsx'
import ContactPrivacyNote from '../components/contact/ContactPrivacyNote.jsx'
import ContactClosing from '../components/contact/ContactClosing.jsx'

export default function ContactPage() {
  return (
    <main className="struktiva-contact-page">
      <ContactHero />
      <div className="struktiva-contact-page__body">
        <ContactStartOptions />
        <ContactDirectWays />
        <ContactPreparation />
        <ContactFormSection />
        <ContactAfterRequest />
        <ContactPrivacyNote />
        <ContactClosing />
      </div>
    </main>
  )
}
