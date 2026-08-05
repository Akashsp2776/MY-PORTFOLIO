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
import Work from './components/Work'
import CaseStudy from './components/CaseStudy'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { projects } from './data'

export default function App() {
  const [caseStudyId, setCaseStudyId] = useState<string | null>(null)
  const activeProject = projects.find((p) => p.id === caseStudyId)

  useEffect(() => {
    if (caseStudyId) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [caseStudyId])

  return (
    <div className="noise-overlay relative min-h-screen overflow-x-hidden">
      <Loader />
      <MouseGlow />
      <ScrollProgress />
      <Navbar />
      <AnimatePresence mode="wait">
        {activeProject ? (
          <CaseStudy key="case-study" project={activeProject} onBack={() => setCaseStudyId(null)} />
        ) : (
          <main key="main" className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Work onOpenCaseStudy={(id) => setCaseStudyId(id)} />
            <Certifications />
            <Education />
            <Experience />
            <Contact />
          </main>
        )}
      </AnimatePresence>
      {!activeProject && <Footer />}
      <BackToTop />
    </div>
  )
}
