import { useState } from 'react'

function Hero() {
  const [showAppModal, setShowAppModal] = useState(false)
  const [showComingSoon, setShowComingSoon] = useState(false)

  const handleGetApp = () => {
    setShowAppModal(true)
  }

  const handleStoreClick = (e) => {
    e.preventDefault()
    setShowComingSoon(true)
    setTimeout(() => setShowComingSoon(false), 3000)
  }

  const scrollToMission = () => {
    const element = document.getElementById('mission')
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <section className="relative w-full h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAy-ABpwMuWrcAoA5eIwWShfv3JXwUzMiiJDTujpWegToqgL4U5sT74dSOrc9XcBXuzaKUrzBqQI4xHHzOvdqutHuuaWNE7KD_JCHOTkuhuj7ZK2AKRTZqQIHUOCtzGT6D9iAWDqZkxkjQTjJlo_HlMLT0IZUHAfkopgDVKxFzHjCE9AwVXm_iTT8lRLryCcikwfstOcEcBwxUvblFA4Iyd49Pi3Onl9R2FHCPC6wm2dsbLCktJx9MyCbX_sWKcq9FacHAuLaPl0A')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background-dark/80 via-background-dark/40 to-transparent z-10" />
      
      <div className="relative z-20 w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-start gap-6">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight max-w-3xl">
          Cultivating the <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#80ffdb]">
            Future of Farming
          </span>
        </h1>
        
        <p className="text-gray-200 text-base sm:text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          Data-driven insights for today, autonomous robotics for tomorrow. Join the agricultural revolution with our smart mobile solutions and future-ready hardware.
        </p>
        
        <div className="flex flex-wrap gap-4 mt-4">
          <button onClick={scrollToMission} className="flex items-center gap-2 h-11 sm:h-12 px-5 sm:px-6 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm sm:text-base font-bold transition-all">
            Explore Our Vision
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>

    {/* App Download Modal */}
    {showAppModal && (
      <>
        <div 
          className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4"
          onClick={() => setShowAppModal(false)}
        >
          <div 
            className="bg-white dark:bg-[#1E332A] rounded-3xl p-8 max-w-md w-full shadow-2xl transform transition-all animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#111816] dark:text-white">Download AgriBotics</h3>
              <button 
                onClick={() => setShowAppModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Choose your platform to download the AgriBotics mobile app
            </p>

            <div className="space-y-4">
              <button 
                onClick={handleStoreClick}
                className="flex items-center gap-4 p-4 rounded-xl border-2 border-gray-200 dark:border-[#2A453A] hover:border-primary hover:bg-primary/5 transition-all group w-full text-left"
              >
                <svg className="h-12 w-12 fill-current text-gray-800 dark:text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-.93 3.57-.93 1.6 0 2.86.83 3.48 2.04-3.11 1.6-2.56 6.36.45 7.64-.52 1.34-1.29 2.65-2.58 3.48zm-4.71-15.6c.64-1.12 1.95-1.74 2.84-1.68.22 1.5-1.03 3.01-2.29 3.12-.76.08-1.95-.53-2.61-1.63.5-1.07 1.42-1.68 2.06-1.81z"/>
                </svg>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Download on the</p>
                  <p className="text-lg font-bold text-[#111816] dark:text-white group-hover:text-primary transition-colors">App Store</p>
                </div>
                <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">schedule</span>
              </button>

              <button 
                onClick={handleStoreClick}
                className="flex items-center gap-4 p-4 rounded-xl border-2 border-gray-200 dark:border-[#2A453A] hover:border-primary hover:bg-primary/5 transition-all group w-full text-left"
              >
                <svg className="h-12 w-12 fill-current text-gray-800 dark:text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.006 1.006 0 0 1-1.61-.79V2.604a1.006 1.006 0 0 1 1.61-.79zm11.455 11.45L4.853 23.476a1.644 1.644 0 0 0 2.031-.192l8.18-8.02zm1.09-1.09l4.58-4.492c.67-.656.684-1.714.03-2.385l-.03-.027-4.58-4.492-5.71 5.71zM4.853.524l10.211 10.211L9.354 16.446 2.822.923A1.644 1.644 0 0 0 4.853.524z"/>
                </svg>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Get it on</p>
                  <p className="text-lg font-bold text-[#111816] dark:text-white group-hover:text-primary transition-colors">Google Play</p>
                </div>
                <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">schedule</span>
              </button>
            </div>
          </div>
        </div>
      </>
    )}

    {/* Coming Soon Toast */}
    {showComingSoon && (
      <div className="fixed top-20 right-4 z-50 px-6 py-4 rounded-xl shadow-lg backdrop-blur-md border bg-primary/90 border-primary text-[#10221c] transform transition-all duration-300 animate-fade-in">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined">schedule</span>
          <span>App coming soon! Stay tuned for updates.</span>
        </div>
      </div>
    )}
  </>
  )
}

export default Hero
