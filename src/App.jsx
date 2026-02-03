import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Robotics from './components/Robotics'
import Mission from './components/Mission'
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

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111816] dark:text-white overflow-x-hidden">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Solutions />
      <Robotics />
      <Mission />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
