import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { confirmedPackages } from './packagesData.js'

export default function PackagesOffers() {
  return (
    <section className="struktiva-packages-section struktiva-packages-offers" aria-labelledby="struktiva-packages-offers-title">
      <div className="struktiva-packages-section__intro">
        <p className="struktiva-packages-eyebrow">Angebote für lokale Betriebe</p>
        <h2 id="struktiva-packages-offers-title">Klarer Einstieg. Verständliche Preise.</h2>
        <p>
          Wählen Sie eine Website, laufende lokale Sichtbarkeit oder einen einfacheren Kundenweg. Der genaue Umfang wird vor der Beauftragung festgelegt. Alle Preise sind netto.
        </p>
      </div>

      <div className="struktiva-packages-offer-list">
        {confirmedPackages.map((item, index) => (
          <motion.article
            className="struktiva-packages-offer"
            key={item.title}
            initial={{ opacity: 1, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.42, delay: index * 0.035 }}
          >
            <div className="struktiva-packages-offer__price">
              <span>{item.cadence}</span>
              <strong>{item.price}</strong>
              <small>{item.tax}</small>
            </div>
            <div className="struktiva-packages-offer__body">
              <h3>{item.title}</h3>
              <p>{item.fit}</p>
              <a className="struktiva-packages-offer__link" href="/digital-check#digital-check-anfrage">Kostenlosen Digital-Check anfragen →</a>
              <div className="struktiva-packages-offer__details">
                <div>
                  <strong>Typischer Umfang</strong>
                  <ul>
                    {item.includes.map((point) => (
                      <li key={point}>
                        <CheckCircle2 aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong>Vorab zu klären</strong>
                  <p>{item.excludes}</p>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

    </section>
  )
}
