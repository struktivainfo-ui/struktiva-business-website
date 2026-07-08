import { packageFaqs } from './packagesData.js'

export default function PackagesFaq() {
  return (
    <section className="struktiva-packages-section struktiva-packages-faq" aria-labelledby="struktiva-packages-faq-title">
      <div className="struktiva-packages-section__intro">
        <p className="struktiva-packages-eyebrow">Häufige Unsicherheiten</p>
        <h2 id="struktiva-packages-faq-title">Kurz geklärt, bevor ein Angebot entsteht.</h2>
      </div>
      <div className="struktiva-packages-faq__list">
        {packageFaqs.map((item) => (
          <article key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
