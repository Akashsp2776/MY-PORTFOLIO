import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/Loader'
import MouseGlow from './components/MouseGlow'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import StatsCounter from './components/StatsCounter'
import Work from './components/Work'
import CaseStudy from './components/CaseStudy'
import CurrentlyBuilding from './components/CurrentlyBuilding'
import TechJourney from './components/TechJourney'
import GitHubStats from './components/GitHubStats'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { projects } from './data'

export default function App() {
  const [caseStudyId, setCaseStudyId] = useState<string | null>(null)
  const activeProject = projects.find((p) => p.id === caseStudyId)

  useEffect(() => {
    if (caseStudyId) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [caseStudyId])

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Loader />
      <MouseGlow />
      <ScrollProgress />
      <Navbar />

      <AnimatePresence mode="wait">
        {activeProject ? (
          <CaseStudy
            key="case-study"
            project={activeProject}
            onBack={() => setCaseStudyId(null)}
          />
        ) : (
          <main key="main">
            <Hero />
            <About />
            <Skills />
            <StatsCounter />
            <Work onOpenCaseStudy={(id) => setCaseStudyId(id)} />
            <CurrentlyBuilding />
            <TechJourney />
            <GitHubStats />
            <Experience />
            <Certifications />
            <Education />
            <Contact />
          </main>
        )}
      </AnimatePresence>

      {!activeProject && <Footer />}
      <BackToTop />
    </div>
  )
}
