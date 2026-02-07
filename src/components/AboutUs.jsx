import { useState, useEffect, useRef } from 'react'

function AboutUs() {
  const [visibleItems, setVisibleItems] = useState([])
  const timelineRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = timelineRefs.current.indexOf(entry.target)
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems(prev => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const founders = [
    {
      name: 'Sagar Kumar Chaudhary',
      title: 'CTO',
      background: '',
      icon: 'engineering',
      image: '/images/sagar-kumar-chaudhary.jpg',
      linkedin: 'https://www.linkedin.com/in/sagar-k-chaudhary-5a1203299/'
    },
    {
      name: 'Adarsh Bhagat',
      title: 'CEO',
      background: '',
      icon: 'person',
      image: '/images/adarsh-bhagat.jpg',
      linkedin: 'https://www.linkedin.com/in/adarsh-bhagat-144ba2294/'
    }
  ]

  const companyDetails = {
    founded: '2025',
    location: 'Gorakhpur, Uttar Pradesh',
    mission: 'Revolutionizing agriculture through intelligent automation and data-driven insights',
    vision: 'A world where technology empowers every farmer to achieve sustainable, profitable farming'
  }

  const timeline = [
    {
      year: '2025',
      title: 'Company Founding',
      status: 'COMPLETED',
      description: 'The seed is planted. Established our core team of agronomists and software engineers with a shared vision: bridging the gap between traditional farming and digital excellence.',
      side: 'right'
    },
    {
      year: '2026',
      title: 'Mobile App & AI Diagnostics',
      status: 'CURRENT',
      description: 'Digital transformation. Launched our flagship mobile application featuring real-time AI crop disease detection and satellite irrigation tracking.',
      side: 'left'
    },
    {
      year: '2026+',
      title: 'Market Analytics & Scaling',
      status: 'UPCOMING',
      description: 'Reaching 10k active users and expanding into predictive market analytics. Providing farmers with data-driven insights for optimal harvest timing and crop pricing.',
      side: 'right'
    },
    {
      year: '2026+',
      title: 'Soil Monitoring Robots',
      status: 'UPCOMING',
      description: 'Beta-testing hardware. Moving beyond software with our first fleet of autonomous robots capable of chemical-free soil analysis and moisture management.',
      side: 'left'
    },
    {
      year: '2026+',
      title: 'Full-Farm Autonomous Surveillance',
      status: 'UPCOMING',
      description: 'The future of farming. End-to-end autonomous ecosystems where robots, drones, and satellites work in perfect harmony to ensure sustainable agriculture.',
      side: 'right'
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-32 w-full bg-white dark:bg-background-dark" id="about">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111816] dark:text-white mb-4 leading-tight">
            Who We Are
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            AgriBotics is pioneering the future of agriculture through innovative technology and sustainable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#111816] dark:text-white mb-6">
              Our Story
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-4 leading-relaxed">
              Founded with a vision to revolutionize farming practices, AgriBotics combines cutting-edge technology with deep agricultural expertise. We believe that the future of farming lies in the intelligent integration of data analytics, automation, and sustainable practices.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              Our team of engineers, agronomists, and data scientists work together to create solutions that empower farmers with real-time insights and autonomous tools, helping them maximize yields while minimizing environmental impact.
            </p>
          </div>
          
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAy-ABpwMuWrcAoA5eIwWShfv3JXwUzMiiJDTujpWegToqgL4U5sT74dSOrc9XcBXuzaKUrzBqQI4xHHzOvdqutHuuaWNE7KD_JCHOTkuhuj7ZK2AKRTZqQIHUOCtzGT6D9iAWDqZkxkjQTjJlo_HlMLT0IZUHAfkopgDVKxFzHjCE9AwVXm_iTT8lRLryCcikwfstOcEcBwxUvblFA4Iyd49Pi3Onl9R2FHCPC6wm2dsbLCktJx9MyCbX_sWKcq9FacHAuLaPl0A')" }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#f0f4f3] dark:bg-[#1E332A] rounded-2xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <span className="material-symbols-outlined text-primary text-4xl">lightbulb</span>
            </div>
            <h3 className="text-xl font-bold text-[#111816] dark:text-white mb-3">Innovation First</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              We push boundaries with cutting-edge technology to solve real agricultural challenges.
            </p>
          </div>

          <div className="bg-[#f0f4f3] dark:bg-[#1E332A] rounded-2xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <span className="material-symbols-outlined text-primary text-4xl">eco</span>
            </div>
            <h3 className="text-xl font-bold text-[#111816] dark:text-white mb-3">Sustainability</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Environmental responsibility guides every decision we make and solution we build.
            </p>
          </div>

          <div className="bg-[#f0f4f3] dark:bg-[#1E332A] rounded-2xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <span className="material-symbols-outlined text-primary text-4xl">groups</span>
            </div>
            <h3 className="text-xl font-bold text-[#111816] dark:text-white mb-3">Farmer-Centric</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              We listen to farmers and design solutions that meet their actual needs.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-24 py-16">
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-primary to-primary/30 hidden lg:block">
              <div className="h-full bg-gradient-to-b from-primary to-transparent animate-pulse"></div>
            </div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  ref={el => timelineRefs.current[index] = el}
                  className={`relative flex flex-col lg:flex-row ${item.side === 'left' ? 'lg:flex-row-reverse' : ''} items-center gap-8 transition-all duration-700 ${
                    visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Card */}
                  <div className={`w-full lg:w-5/12 ${item.side === 'left' ? 'lg:text-right' : ''}`}>
                    <div className={`bg-white dark:bg-[#1E332A] rounded-2xl p-6 shadow-lg border-2 ${
                      item.status === 'CURRENT' ? 'border-primary shadow-primary/20' : 'border-gray-100 dark:border-[#2A453A]'
                    } hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer group`}>
                      <div className={`flex items-center justify-between mb-3 ${item.side === 'left' ? 'flex-row-reverse' : ''}`}>
                        <span className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">{item.year}</span>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 ${
                          item.status === 'COMPLETED' ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 group-hover:bg-primary/20 group-hover:text-primary' :
                          item.status === 'CURRENT' ? 'bg-primary text-[#10221c] animate-pulse' :
                          'bg-primary/10 text-primary group-hover:bg-primary/20'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-[#111816] dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className={`w-12 h-12 rounded-full ${
                      item.status === 'COMPLETED' ? 'bg-primary' : 
                      item.status === 'CURRENT' ? 'bg-primary ring-4 ring-primary/20 animate-pulse' : 
                      'bg-primary/30'
                    } flex items-center justify-center shadow-lg z-10 transition-all duration-500 hover:scale-125 ${
                      visibleItems.includes(index) ? 'scale-100' : 'scale-0'
                    }`}>
                      <span className={`material-symbols-outlined text-white text-xl ${item.status === 'CURRENT' ? 'animate-spin' : ''}`}>
                        {item.status === 'COMPLETED' ? 'check' : item.status === 'CURRENT' ? 'sync' : 'schedule'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Empty Space for Alignment */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Details Section */}
        <div className="mt-16 max-w-md mx-auto">
          {/* Company Info */}
          <div className="bg-[#f0f4f3] dark:bg-[#1E332A] rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="size-8 text-primary">
                <span className="material-symbols-outlined text-3xl">agriculture</span>
              </div>
              <h2 className="text-2xl font-bold text-[#111816] dark:text-white">AgriBotics</h2>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
              Cultivating a smarter future for agriculture through data and robotics.
            </p>

            {/* Company Details */}
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5">info</span>
                <div className="text-sm">
                  <p className="font-bold text-[#111816] dark:text-white">Founded</p>
                  <p className="text-gray-500 dark:text-gray-400">{companyDetails.founded}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5">location_on</span>
                <div className="text-sm">
                  <p className="font-bold text-[#111816] dark:text-white">Headquarters</p>
                  <p className="text-gray-500 dark:text-gray-400">{companyDetails.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Founders Section */}
        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#111816] dark:text-white mb-8 text-center">Meet Our Founders</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white dark:bg-[#1E332A] p-6 rounded-2xl border-2 border-gray-100 dark:border-[#2A453A] hover:shadow-xl dark:hover:shadow-xl hover:border-primary dark:hover:border-primary transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary overflow-hidden">
                    {founder.image ? (
                      <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="material-symbols-outlined text-3xl">{founder.icon}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-[#111816] dark:text-white">{founder.name}</h4>
                    {founder.title && (
                      <p className="text-xs font-bold text-primary uppercase tracking-wider">{founder.title}</p>
                    )}
                  </div>
                  {founder.linkedin && (
                    <a 
                      href={founder.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-[#0fb881] transition-colors"
                      aria-label={`${founder.name} LinkedIn Profile`}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                </div>
                {founder.background && (
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {founder.background}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
