import { priceFactors } from './packagesData.js'

export default function PackagesPriceFactors() {
  return (
    <>
      <section className="struktiva-packages-section struktiva-packages-factors" aria-labelledby="struktiva-packages-factors-title">
        <div className="struktiva-packages-section__intro">
          <p className="struktiva-packages-eyebrow">Was Preise beeinflusst</p>
          <h2 id="struktiva-packages-factors-title">Der Aufwand hängt vom Ausgangspunkt und dem tatsächlichen Umfang ab.</h2>
          <p>
            Die gleiche Idee kann sehr unterschiedlich aufwendig sein. Deshalb ersetzt diese Seite kein starres Preisraster und keinen automatischen Rechner.
          </p>
        </div>
        <div className="struktiva-packages-factor-grid">
          {priceFactors.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="struktiva-packages-section struktiva-packages-transparency" aria-labelledby="struktiva-packages-transparency-title">
        <p className="struktiva-packages-eyebrow">Klare Absprachen</p>
        <h2 id="struktiva-packages-transparency-title">Vor der Umsetzung soll klar sein, was gemacht wird und wofür Kosten entstehen.</h2>
        <p>
          Der Umfang wird vor der Umsetzung verständlich eingeordnet. Wenn sich Anforderungen verändern oder zusätzliche Themen hinzukommen, sollen diese nicht unbemerkt in einem Projektumfang verschwinden. Ziel ist eine nachvollziehbare Zusammenarbeit.
        </p>
      </section>
    </>
  )
}
