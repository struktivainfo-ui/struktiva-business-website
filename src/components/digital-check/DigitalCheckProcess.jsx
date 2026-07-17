import { digitalCheckProcess } from './digitalCheckData.js'

export default function DigitalCheckProcess() {
  return (
    <section className="dc-section dc-process" aria-labelledby="dc-process-title">
      <div className="dc-shell">
        <div className="dc-section-heading">
          <p className="dc-eyebrow">Vier klare Schritte</p>
          <h2 id="dc-process-title">So läuft der Digital-Check ab</h2>
        </div>
        <ol className="dc-process__list">
          {digitalCheckProcess.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{step.title}</h3><p>{step.text}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
