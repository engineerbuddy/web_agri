import { useState, useEffect } from 'react'

function Solutions() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const phoneSlides = [
    {
      header: 'My Farm',
      subheader: 'Sunny, 72°F',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBImfQsOqwDqzJ4lvm5UUy6HESJlISZ4s34kVBv9RgpqT791PAg-xccqdQCjMIdI0n6rOP66JhuVMnKg4p_rVlD7MOeLxFs9vrijQLikJv4h6TJ15FZJ65P9Wo9NTlsAaW-QAgwOqGMrkDI_M30ZO6vDb5dJwVE5g-dqKW7FwDyx9JNM___89sppWX0lsXroN0VuxyK54h_YKVO_hFOKTjq0l5RzP-MP-LLLvEEQGIlcvrN00rWRyZOl8RByN6oy5YhkcLQRoezwg',
      metric1: { label: 'Soil Moisture', value: 'Optimal (65%)', icon: 'water_drop', color: 'green' },
      stats: [
        { label: 'Yield est.', value: '+12%' },
        { label: 'Tasks', value: '3 Pending' }
      ]
    },
    {
      header: 'Crop Monitor',
      subheader: 'Last update: 2h ago',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500',
      metric1: { label: 'Plant Health', value: 'Excellent (95%)', icon: 'eco', color: 'green' },
      stats: [
        { label: 'Coverage', value: '100%' },
        { label: 'Alerts', value: '0 Active' }
      ]
    },
    {
      header: 'Weather Forecast',
      subheader: 'Next 7 days',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500',
      metric1: { label: 'Rain Forecast', value: 'Expected (40%)', icon: 'rainy', color: 'blue' },
      stats: [
        { label: 'Temp Range', value: '68-82°F' },
        { label: 'Humidity', value: '55%' }
      ]
    },
    {
      header: 'Equipment Status',
      subheader: 'All systems online',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500',
      metric1: { label: 'Battery Level', value: 'Charged (87%)', icon: 'battery_charging_full', color: 'green' },
      stats: [
        { label: 'Active', value: '4 Robots' },
        { label: 'Idle', value: '1 Robot' }
      ]
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % phoneSlides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % phoneSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + phoneSlides.length) % phoneSlides.length)
  }

  const currentData = phoneSlides[currentSlide]

  const features = [
    {
      icon: 'compost',
      title: 'Soil Health',
      description: 'Real-time nutrient tracking and pH balancing advice via connected sensors.'
    },
    {
      icon: 'pest_control',
      title: 'AI Weed Detection',
      description: 'Pinpoint invasive species with computer vision instantly.'
    },
    {
      icon: 'medical_services',
      title: 'Disease Diagnosis',
      description: 'Identify crop ailments instantly via camera photo analysis.'
    },
    {
      icon: 'trending_up',
      title: 'Market Analytics',
      description: 'Track global commodity prices and trends to optimize sales.'
    }
  ]

  return (
    <section className="py-20 lg:py-32 w-full bg-background-light dark:bg-background-dark" id="solutions">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <span className="text-primary font-bold uppercase tracking-wider text-sm">Current Mobile Solutions</span>
              <h2 className="text-[#111816] dark:text-white text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Smart Farming in Your Pocket
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-xl">
                Our mobile platform empowers farmers with real-time data and AI-driven insights. Make informed decisions instantly, from anywhere in the field.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`bg-white dark:bg-[#1E332A] p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-gray-100 dark:border-[#2A453A] cursor-pointer transform ${
                    hoveredCard === index ? 'scale-105 -translate-y-2' : ''
                  }`}
                >
                  <div className={`size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-[#10221c] transition-all text-primary ${
                    hoveredCard === index ? 'scale-110 rotate-12' : ''
                  }`}>
                    <span className="material-symbols-outlined">{feature.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#111816] dark:text-white mb-2 transition-colors">{feature.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div className="flex flex-col items-center gap-8 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl opacity-60" />
              
              <div className="relative z-10 bg-[#111816] p-2 sm:p-3 rounded-3xl sm:rounded-[3rem] shadow-2xl border-2 sm:border-4 border-[#2A453A]">
                <div className="rounded-2xl sm:rounded-[2.5rem] overflow-hidden w-[280px] sm:w-[300px] h-[560px] sm:h-[600px] bg-white relative">
                  <div className="bg-primary h-24 sm:h-32 p-4 sm:p-6 flex flex-col justify-end transition-all duration-500">
                    <p className="text-[#10221c] font-bold text-lg sm:text-xl">{currentData.header}</p>
                    <p className="text-[#10221c]/80 text-xs sm:text-sm">{currentData.subheader}</p>
                  </div>
                  
                  <div className="p-3 sm:p-4 flex flex-col gap-3 sm:gap-4">
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-xl flex items-center gap-2 sm:gap-3 shadow-sm transition-all duration-500">
                      <div className={`size-8 sm:size-10 rounded-full bg-${currentData.metric1.color}-100 flex items-center justify-center text-${currentData.metric1.color}-700`}>
                        <span className="material-symbols-outlined text-xs sm:text-sm">{currentData.metric1.icon}</span>
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase">{currentData.metric1.label}</p>
                        <p className="text-sm sm:text-base text-gray-800 font-bold">{currentData.metric1.value}</p>
                      </div>
                    </div>
                    
                    <div 
                      className="h-32 sm:h-40 w-full bg-gray-100 rounded-xl bg-cover bg-center transition-all duration-500" 
                      style={{ backgroundImage: `url('${currentData.image}')` }}
                    />
                    
                    <div className="flex gap-2">
                      <div className="bg-gray-50 p-3 sm:p-4 rounded-xl flex-1 shadow-sm transition-all duration-500">
                        <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase mb-1">{currentData.stats[0].label}</p>
                        <p className="text-gray-800 font-bold text-base sm:text-lg">{currentData.stats[0].value}</p>
                      </div>
                      <div className="bg-gray-50 p-3 sm:p-4 rounded-xl flex-1 shadow-sm transition-all duration-500">
                        <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase mb-1">{currentData.stats[1].label}</p>
                        <p className="text-gray-800 font-bold text-base sm:text-lg">{currentData.stats[1].value}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 size-12 sm:size-14 bg-primary rounded-full shadow-lg flex items-center justify-center text-[#10221c]">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">add</span>
                  </div>

                  {/* Slider Navigation */}
                  <button 
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-20"
                  >
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-20"
                  >
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>

                  {/* Slide Indicators */}
                  <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {phoneSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1.5 rounded-full transition-all ${
                          currentSlide === index ? 'w-6 bg-primary' : 'w-1.5 bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div id="app-downloads" className="relative z-10 flex items-center justify-center gap-4 flex-wrap">
                <a className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-4 py-2.5 rounded-xl border border-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-.93 3.57-.93 1.6 0 2.86.83 3.48 2.04-3.11 1.6-2.56 6.36.45 7.64-.52 1.34-1.29 2.65-2.58 3.48zm-4.71-15.6c.64-1.12 1.95-1.74 2.84-1.68.22 1.5-1.03 3.01-2.29 3.12-.76.08-1.95-.53-2.61-1.63.5-1.07 1.42-1.68 2.06-1.81z"/>
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] uppercase font-medium leading-none opacity-80">Download on the</span>
                    <span className="text-sm font-bold leading-tight mt-0.5">App Store</span>
                  </div>
                </a>
                
                <a className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-4 py-2.5 rounded-xl border border-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.006 1.006 0 0 1-1.61-.79V2.604a1.006 1.006 0 0 1 1.61-.79zm11.455 11.45L4.853 23.476a1.644 1.644 0 0 0 2.031-.192l8.18-8.02zm1.09-1.09l4.58-4.492c.67-.656.684-1.714.03-2.385l-.03-.027-4.58-4.492-5.71 5.71zM4.853.524l10.211 10.211L9.354 16.446 2.822.923A1.644 1.644 0 0 0 4.853.524z"/>
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] uppercase font-medium leading-none opacity-80">Get it on</span>
                    <span className="text-sm font-bold leading-tight mt-0.5">Google Play</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions
