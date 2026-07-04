import { MessageCircle } from 'lucide-react'
import { contactDetails } from '../../legacy/legacyContent.jsx'

export default function FloatingWhatsAppButton() {
  return (
    <a
      href={contactDetails.whatsappHref}
      className="struktiva-floating-whatsapp"
      target="_blank"
      rel="noreferrer"
      aria-label={`STRUKTIVA per WhatsApp unter ${contactDetails.whatsappLabel} kontaktieren`}
    >
      <MessageCircle aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  )
}
