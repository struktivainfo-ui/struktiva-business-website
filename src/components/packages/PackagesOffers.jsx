import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { applicationOffer, confirmedPackages } from './packagesData.js'

export default function PackagesOffers() {
  return (
    <section className="struktiva-packages-section struktiva-packages-offers" aria-labelledby="struktiva-packages-offers-title">
      <div className="struktiva-packages-section__intro">
        <p className="struktiva-packages-eyebrow">Bestätigte Angebotsformen</p>
        <h2 id="struktiva-packages-offers-title">Pakete geben Orientierung. Der tatsächliche Umfang wird vorher eingeordnet.</h2>
        <p>
          Die folgenden Namen, Preise und Inhalte stammen aus den bestehenden STRUKTIVA-Projektinhalten. Sie sind als Einstieg zu verstehen, nicht als automatische Vollabdeckung jeder denkbaren Anforderung.
        </p>
      </div>

      <div className="struktiva-packages-offer-list">
        {confirmedPackages.map((item, index) => (
          <motion.article
            className="struktiva-packages-offer"
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
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
              <div className="struktiva-packages-offer__details">
                <div>
                  <strong>Enthalten</strong>
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
                  <strong>Nicht automatisch enthalten</strong>
                  <p>{item.excludes}</p>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <aside className="struktiva-packages-application">
        <div>
          <p className="struktiva-packages-eyebrow">Sozial fairer Einstieg</p>
          <h3>{applicationOffer.title}</h3>
          <p>{applicationOffer.text}</p>
        </div>
        <div className="struktiva-packages-application__price">
          <span>{applicationOffer.cadence}</span>
          <strong>{applicationOffer.price}</strong>
          <small>{applicationOffer.tax}</small>
        </div>
      </aside>
    </section>
  )
}
