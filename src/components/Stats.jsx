import { useState, useEffect } from 'react'

function Stats() {
  const [counts, setCounts] = useState({
    acres: 0,
    detection: 0,
    increase: 0
  })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCounters()
            setHasAnimated(true)
          }
        })
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById('stats-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounters = () => {
    const duration = 2000
    const steps = 50
    const interval = duration / steps

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts({
        acres: Math.floor(50 * progress),
        detection: Math.floor(98 * progress),
        increase: Math.floor(15 * progress)
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounts({ acres: 50, detection: 98, increase: 15 })
      }
    }, interval)
  }

  return (
    <div className="relative z-20 -mt-10 w-full px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div 
        id="stats-section"
        className="max-w-[1000px] mx-auto glass-panel dark:glass-panel-dark rounded-2xl p-4 sm:p-6 shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pointer-events-auto"
      >
        <div className="flex flex-col items-center justify-center text-center border-r border-gray-200 dark:border-white/10 lg:last:border-0">
          <span className="text-2xl sm:text-3xl font-bold text-[#111816] dark:text-white">{counts.acres}k+</span>
          <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">Acres Monitored</span>
        </div>
        
        <div className="flex flex-col items-center justify-center text-center border-r border-gray-200 dark:border-white/10 lg:border-r">
          <span className="text-2xl sm:text-3xl font-bold text-[#111816] dark:text-white">{counts.detection}%</span>
          <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">Disease Detection</span>
        </div>
        
        <div className="flex flex-col items-center justify-center text-center border-t lg:border-t-0 border-r lg:border-r border-gray-200 dark:border-white/10 pt-3 lg:pt-0">
          <span className="text-2xl sm:text-3xl font-bold text-[#111816] dark:text-white">24/7</span>
          <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">AI Analysis</span>
        </div>
        
        <div className="flex flex-col items-center justify-center text-center border-t lg:border-t-0 border-gray-200 dark:border-white/10 pt-3 lg:pt-0">
          <span className="text-2xl sm:text-3xl font-bold text-[#111816] dark:text-white">{counts.increase}%</span>
          <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">Yield Increase</span>
        </div>
      </div>
    </div>
  )
}

export default Stats
