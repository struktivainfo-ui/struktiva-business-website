import { useEffect, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { DIGITAL_CHECK_SUCCESS_KEY } from '../components/digital-check/DigitalCheckLeadForm.jsx'

function readSuccessMarker() {
  try {
    const marker = JSON.parse(window.sessionStorage.getItem(DIGITAL_CHECK_SUCCESS_KEY) || 'null')
    window.sessionStorage.removeItem(DIGITAL_CHECK_SUCCESS_KEY)
    return Boolean(marker?.submissionId && Date.now() - Number(marker.createdAt) < 10 * 60 * 1000)
  } catch {
    return false
  }
}

export default function DigitalCheckSuccessPage() {
  const [confirmed] = useState(readSuccessMarker)

  useEffect(() => {
    document.getElementById('main-content')?.focus()
  }, [])

  return (
    <main className="dc-success">
      <div className="dc-success__inner">
        <CheckCircle2 aria-hidden="true" />
        {confirmed ? (
          <>
            <p className="dc-eyebrow">Anfrage eingegangen</p>
            <h1>Vielen Dank – Ihre Anfrage zum Digital-Check ist angekommen.</h1>
            <p>Wir sehen uns Ihre Angaben persönlich an und melden uns in der Regel innerhalb eines Werktags. Dabei klären wir, ob der Digital-Check zu Ihrer Ausgangslage passt und welche Informationen wir noch benötigen.</p>
            <p className="dc-success__note">Ihre Anfrage ist noch keine kostenpflichtige Bestellung. Ein Auftrag entsteht erst nach unserer gesonderten Bestätigung.</p>
            <a className="campaign-button" href="/">Zur STRUKTIVA-Startseite</a>
          </>
        ) : (
          <>
            <p className="dc-eyebrow">Digital-Check</p>
            <h1>Sie möchten einen Digital-Check anfragen?</h1>
            <p>Nutzen Sie bitte das Anfrageformular, damit wir Ihre Ausgangslage persönlich prüfen können.</p>
            <a className="campaign-button" href="/digital-check#digital-check-anfrage">Zum Anfrageformular</a>
          </>
        )}
      </div>
    </main>
  )
}
