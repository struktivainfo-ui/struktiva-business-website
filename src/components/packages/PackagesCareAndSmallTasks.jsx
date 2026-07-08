import { carePlans, smallTaskExamples } from './packagesData.js'

export default function PackagesCareAndSmallTasks() {
  return (
    <>
      <section className="struktiva-packages-section struktiva-packages-care" aria-labelledby="struktiva-packages-care-title">
        <div className="struktiva-packages-section__intro">
          <p className="struktiva-packages-eyebrow">Laufende Betreuung</p>
          <h2 id="struktiva-packages-care-title">Laufende Betreuung nur dort, wo laufender Aufwand entsteht.</h2>
          <p>
            Eine monatliche Betreuung ist sinnvoll, wenn regelmäßig Inhalte, Systeme, Abläufe oder digitale Prozesse betreut und weiterentwickelt werden. Sie ist nicht automatisch Bestandteil jedes Projekts.
          </p>
        </div>
        <div className="struktiva-packages-care__grid">
          {carePlans.map((plan) => (
            <article key={plan.title}>
              <h3>{plan.title}</h3>
              <p className="struktiva-packages-care__price">{plan.price}</p>
              <p className="struktiva-packages-care__tax">{plan.tax}</p>
              <p>{plan.text}</p>
            </article>
          ))}
        </div>
        <div className="struktiva-packages-care__note">
          <strong>Keine automatische Pflicht</strong>
          <p>
            Wenn beispielsweise eine Website fertiggestellt ist und nur gelegentlich eine kleine Änderung benötigt wird, muss daraus nicht automatisch ein umfangreiches monatliches Betreuungspaket entstehen. Gelegentliche kleinere Anpassungen können je nach Aufwand separat vereinbart werden.
          </p>
        </div>
      </section>

      <section className="struktiva-packages-section struktiva-packages-small" aria-labelledby="struktiva-packages-small-title">
        <div>
          <p className="struktiva-packages-eyebrow">Einzelne Aufgaben</p>
          <h2 id="struktiva-packages-small-title">Auch kleinere Aufgaben dürfen klein bleiben.</h2>
          <p>
            Nicht jede Anfrage muss zu einem großen Projekt werden. Wenn eine klar abgegrenzte Änderung, Ergänzung oder technische Aufgabe sinnvoll ist, kann diese separat betrachtet werden.
          </p>
        </div>
        <ul aria-label="Beispiele für kleine Aufgaben">
          {smallTaskExamples.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  )
}
