import AboutHero from '../components/about/AboutHero.jsx'
import AboutMethod from '../components/about/AboutMethod.jsx'
import AboutDevelopment from '../components/about/AboutDevelopment.jsx'
import AboutCta from '../components/about/AboutCta.jsx'

export default function AboutPage() {
  return (
    <main className="struktiva-about-page">
      <AboutHero />
      <AboutMethod />
      <AboutDevelopment />
      <AboutCta />
    </main>
  )
}
