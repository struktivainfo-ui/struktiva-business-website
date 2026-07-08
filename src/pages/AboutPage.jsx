import AboutHero from '../components/about/AboutHero.jsx'
import AboutPhilosophy from '../components/about/AboutPhilosophy.jsx'
import AboutPeople from '../components/about/AboutPeople.jsx'
import AboutPrinciples from '../components/about/AboutPrinciples.jsx'
import AboutMethod from '../components/about/AboutMethod.jsx'
import AboutBoundaries from '../components/about/AboutBoundaries.jsx'
import AboutDevelopment from '../components/about/AboutDevelopment.jsx'
import AboutCta from '../components/about/AboutCta.jsx'

export default function AboutPage() {
  return (
    <main className="struktiva-about-page">
      <AboutHero />
      <AboutPhilosophy />
      <AboutPeople />
      <AboutPrinciples />
      <AboutMethod />
      <AboutBoundaries />
      <AboutDevelopment />
      <AboutCta />
    </main>
  )
}
