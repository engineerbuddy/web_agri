import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Header({ darkMode, toggleDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleGetApp = () => {
    scrollToSection('app-downloads')
    setMobileMenuOpen(false)
  }

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate(`/?section=${sectionId}`)
      setMobileMenuOpen(false)
      return
    }
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#f0f4f3] dark:border-[#1E332A]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="size-8 text-primary">
                <span className="material-symbols-outlined text-3xl">agriculture</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-[#111816] dark:text-white">AgriBotics</h2>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('solutions')} className="text-sm font-medium hover:text-primary transition-colors text-[#111816] dark:text-gray-200">
                Solutions
              </button>
              <button onClick={() => scrollToSection('robotics')} className="text-sm font-medium hover:text-primary transition-colors text-[#111816] dark:text-gray-200">
                Robotics
              </button>
              <button onClick={() => scrollToSection('mission')} className="text-sm font-medium hover:text-primary transition-colors text-[#111816] dark:text-gray-200">
                Mission
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors text-[#111816] dark:text-gray-200">
                Contact
              </button>
              <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors text-[#111816] dark:text-gray-200">
                About Us
              </Link>
            </nav>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={toggleDarkMode}
                className="hidden sm:flex items-center justify-center h-10 w-10 rounded-lg hover:bg-[#f0f4f3] dark:hover:bg-[#1E332A] transition-colors"
              >
                <span className="material-symbols-outlined text-[#111816] dark:text-white">
                  {darkMode ? 'light_mode' : 'dark_mode'}
                </span>
              </button>
              
              <button className="hidden sm:flex items-center justify-center h-10 px-5 rounded-lg bg-[#f0f4f3] hover:bg-[#e0e6e4] dark:bg-[#1E332A] dark:hover:bg-[#2A453A] text-[#111816] dark:text-white text-sm font-bold transition-colors">
                Log In
              </button>
              
              <button 
                onClick={handleGetApp}
                className="flex items-center justify-center h-10 px-5 rounded-lg bg-primary hover:bg-[#0fb881] text-[#10221c] text-sm font-bold shadow-lg shadow-primary/20 transition-all transform hover:scale-105"
              >
                Get the App
              </button>
              
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-[#111816] dark:text-white p-2"
              >
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-[98] md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 w-80 max-w-[80%] h-full bg-white dark:bg-background-dark z-[99] shadow-xl md:hidden overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-[#111816] dark:text-white">Menu</h3>
                <button onClick={() => setMobileMenuOpen(false)} className="text-[#111816] dark:text-white">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              
              <nav className="flex flex-col gap-4">
                <button onClick={() => scrollToSection('solutions')} className="text-lg font-medium hover:text-primary transition-colors text-left text-[#111816] dark:text-gray-200">
                  Solutions
                </button>
                <button onClick={() => scrollToSection('robotics')} className="text-lg font-medium hover:text-primary transition-colors text-left text-[#111816] dark:text-gray-200">
                  Robotics
                </button>
                <button onClick={() => scrollToSection('mission')} className="text-lg font-medium hover:text-primary transition-colors text-left text-[#111816] dark:text-gray-200">
                  Mission
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-lg font-medium hover:text-primary transition-colors text-left text-[#111816] dark:text-gray-200">
                  Contact
                </button>
                <Link to="/about" className="text-lg font-medium hover:text-primary transition-colors text-left text-[#111816] dark:text-gray-200">
                  About Us
                </Link>
              </nav>
              
              <div className="mt-8 flex flex-col gap-3">
                <button className="w-full h-10 px-5 rounded-lg bg-[#f0f4f3] hover:bg-[#e0e6e4] dark:bg-[#1E332A] dark:hover:bg-[#2A453A] text-[#111816] dark:text-white text-sm font-bold transition-colors">
                  Log In
                </button>
                <button 
                  onClick={handleGetApp}
                  className="w-full h-10 px-5 rounded-lg bg-primary hover:bg-[#0fb881] text-[#10221c] text-sm font-bold transition-colors"
                >
                  Get the App
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Header
