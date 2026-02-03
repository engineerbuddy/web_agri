import { useState, useEffect } from 'react'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 flex items-center justify-center size-14 rounded-full bg-primary hover:bg-[#0fb881] text-[#10221c] shadow-xl transition-all transform hover:scale-110 animate-fade-in"
          title="Scroll to top"
        >
          <span className="material-symbols-outlined text-2xl">arrow_upward</span>
        </button>
      )}
    </>
  )
}

export default ScrollToTop
