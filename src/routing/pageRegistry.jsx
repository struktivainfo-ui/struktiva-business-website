import HomePage from '../pages/HomePage.jsx'
import SolutionsPage from '../pages/SolutionsPage.jsx'
import PracticeExamplesPage from '../pages/PracticeExamplesPage.jsx'
import SalonKarolaCaseStudyPage from '../pages/SalonKarolaCaseStudyPage.jsx'
import DigitalCheckPage from '../pages/DigitalCheckPage.jsx'
import ServicesPage from '../pages/ServicesPage.jsx'
import PackagesPage from '../pages/PackagesPage.jsx'
import DemosPage from '../pages/DemosPage.jsx'
import ReferencesPage from '../pages/ReferencesPage.jsx'
import AboutPage from '../pages/AboutPage.jsx'
import ContactPage from '../pages/ContactPage.jsx'
import ImpressumPage from '../pages/ImpressumPage.jsx'
import DatenschutzPage from '../pages/DatenschutzPage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'
import DemoHandwerkerPage from '../pages/DemoHandwerkerPage.jsx'
import DemoKosmetikPage from '../pages/DemoKosmetikPage.jsx'
import DemoDienstleisterPage from '../pages/DemoDienstleisterPage.jsx'

export const activePageComponents = {
  '/': HomePage,
  '/ueber-uns': AboutPage,
  '/loesungen': SolutionsPage,
  '/praxisbeispiele': PracticeExamplesPage,
  '/praxisbeispiele/salon-karola': SalonKarolaCaseStudyPage,
  '/digital-check': DigitalCheckPage,
  '/leistungen': ServicesPage,
  '/pakete': PackagesPage,
  '/referenzen': ReferencesPage,
  '/demos': DemosPage,
  '/kontakt': ContactPage,
  '/impressum': ImpressumPage,
  '/datenschutz': DatenschutzPage,
  '/demos/handwerker': DemoHandwerkerPage,
  '/demos/kosmetik': DemoKosmetikPage,
  '/demos/lokaler-dienstleister': DemoDienstleisterPage,
}

export function getPageComponent(pathname) {
  return activePageComponents[pathname] || NotFoundPage
}
