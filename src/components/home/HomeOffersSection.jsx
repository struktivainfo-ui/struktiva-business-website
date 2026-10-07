import { confirmedPackages } from '../packages/packagesData.js'

export default function HomeOffersSection() {
  return (
    <section className="struktiva-home-offers" aria-labelledby="struktiva-home-offers-title">
      <div className="struktiva-home-offers__heading">
        <p className="struktiva-packages-eyebrow">Unsere Angebote</p>
        <h2 id="struktiva-home-offers-title">Was Ihr Betrieb braucht. Klar kalkuliert.</h2>
        <p>Websites für einen überzeugenden ersten Eindruck, lokale Sichtbarkeit und einfachere Kundenanfragen.</p>
      </div>
      <div className="struktiva-home-offers__list">
        {confirmedPackages.map((offer) => (
          <div className="struktiva-home-offers__item" key={offer.title}>
            <div><strong>{offer.title}</strong><span>{offer.fit}</span></div>
            <p>{offer.price} <small>netto{offer.cadence === 'pro Monat' ? ' / Monat' : ''}</small></p>
          </div>
        ))}
      </div>
      <p className="struktiva-home-offers__note">Website START auch in 2 × 245 € netto. Umfang und mögliche Zusatzkosten klären wir vorab.</p>
      <div className="struktiva-home-offers__actions">
        <a href="/digital-check#digital-check-anfrage">Kostenlosen Digital-Check anfragen →</a>
        <a href="/pakete">Alle Pakete im Detail ansehen →</a>
      </div>
    </section>
  )
}
