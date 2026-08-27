import { lazy } from 'react'
import HomePage from '../pages/HomePage.jsx'
import SolutionsPage from '../pages/SolutionsPage.jsx'
import PracticeExamplesPage from '../pages/PracticeExamplesPage.jsx'
import SalonKarolaCaseStudyPage from '../pages/SalonKarolaCaseStudyPage.jsx'
import DigitalCheckPage from '../pages/DigitalCheckPage.jsx'
import DigitalCheckSuccessPage from '../pages/DigitalCheckSuccessPage.jsx'
import ServicesPage from '../pages/ServicesPage.jsx'
import PackagesPage from '../pages/PackagesPage.jsx'
import AboutPage from '../pages/AboutPage.jsx'
import ContactPage from '../pages/ContactPage.jsx'
import ImpressumPage from '../pages/ImpressumPage.jsx'
import DatenschutzPage from '../pages/DatenschutzPage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'
import DemoHandwerkerPage from '../pages/DemoHandwerkerPage.jsx'
import DemoKosmetikPage from '../pages/DemoKosmetikPage.jsx'
import DemoDienstleisterPage from '../pages/DemoDienstleisterPage.jsx'

const DigitalConsultingCalwPage = lazy(() => import('../pages/DigitalConsultingCalwPage.jsx'))
const DigitalizationCalwPage = lazy(() => import('../pages/DigitalizationCalwPage.jsx'))
const WebsiteTradesCalwPage = lazy(() => import('../pages/WebsiteTradesCalwPage.jsx'))
const DigitalCustomerProcessesCalwPage = lazy(() => import('../pages/DigitalCustomerProcessesCalwPage.jsx'))
const GoogleVisibilityCalwPage = lazy(() => import('../pages/GoogleVisibilityCalwPage.jsx'))
const AiAutomationCalwPage = lazy(() => import('../pages/AiAutomationCalwPage.jsx'))

export const activePageComponents = {
  '/': HomePage,
  '/ueber-uns': AboutPage,
  '/loesungen': SolutionsPage,
  '/praxisbeispiele': PracticeExamplesPage,
  '/praxisbeispiele/salon-karola': SalonKarolaCaseStudyPage,
  '/digital-check': DigitalCheckPage,
  '/digital-check/danke': DigitalCheckSuccessPage,
  '/leistungen': ServicesPage,
  '/pakete': PackagesPage,
  '/kontakt': ContactPage,
  '/impressum': ImpressumPage,
  '/datenschutz': DatenschutzPage,
  '/digitale-unternehmensberatung-calw': DigitalConsultingCalwPage,
  '/digitalisierung-calw': DigitalizationCalwPage,
  '/website-handwerker-calw': WebsiteTradesCalwPage,
  '/digitale-kundenprozesse-calw': DigitalCustomerProcessesCalwPage,
  '/google-sichtbarkeit-calw': GoogleVisibilityCalwPage,
  '/ki-automatisierung-calw': AiAutomationCalwPage,
  '/demos/handwerker': DemoHandwerkerPage,
  '/demos/kosmetik': DemoKosmetikPage,
  '/demos/lokaler-dienstleister': DemoDienstleisterPage,
}

export function getPageComponent(pathname) {
  return activePageComponents[pathname] || NotFoundPage
}
