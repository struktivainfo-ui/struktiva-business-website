import { Check, X } from 'lucide-react'
import { digitalCheckDoesNotFit, digitalCheckFits } from './digitalCheckData.js'

export default function DigitalCheckSuitability() {
  return (
    <section className="dc-section dc-fit" aria-labelledby="dc-fit-title">
      <div className="dc-shell">
        <div className="dc-section-heading">
          <p className="dc-eyebrow">Klare Abgrenzung</p>
          <h2 id="dc-fit-title">Passt der Digital-Check zu Ihrem Betrieb?</h2>
        </div>
        <div className="dc-fit__columns">
          <div><h3>Der Check passt, wenn …</h3><ul>{digitalCheckFits.map((item) => <li key={item}><Check aria-hidden="true" /><span>{item}</span></li>)}</ul></div>
          <div><h3>Der Check passt nicht, wenn …</h3><ul>{digitalCheckDoesNotFit.map((item) => <li key={item}><X aria-hidden="true" /><span>{item}</span></li>)}</ul></div>
        </div>
        <p className="dc-fit__close">Unsicher? Senden Sie die Anfrage mit Ihrer wichtigsten Frage. Wir sagen Ihnen vor einer Beauftragung offen, ob der Digital-Check dafür geeignet ist.</p>
      </div>
    </section>
  )
}
