import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Robotics from './components/Robotics'
import Mission from './components/Mission'
import AboutUs from './components/AboutUs'
import ContactForm from './components/ContactForm'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  const HomePage = () => {
    const location = useLocation()

    useEffect(() => {
      const params = new URLSearchParams(location.search)
      const sectionId = params.get('section')
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId)
          if (element) {
            const headerOffset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }, 100)
      }
    }, [location.search])

    return (
      <>
        <Hero />
        <Solutions />
        <Robotics />
        <Mission />
        <ContactForm />
      </>
    )
  }

  const AboutUsPage = () => {
    const location = useLocation()

    useEffect(() => {
      if (location.hash) {
        setTimeout(() => {
          const id = location.hash.replace('#', '')
          const element = document.getElementById(id)
          if (element) {
            const headerOffset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }, 100)
      }
    }, [location.hash])

    return <AboutUs />
  }

  return (
    <BrowserRouter>
      <div className="bg-background-light dark:bg-background-dark font-display text-[#111816] dark:text-white overflow-x-hidden">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  )
}

export default App
