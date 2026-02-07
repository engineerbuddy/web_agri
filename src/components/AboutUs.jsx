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
      title: 'Co-Founder',
      background: '',
      icon: 'engineering'
    },
    {
      name: 'Adarsh Bhagat',
      title: 'Co-Founder',
      background: '',
      icon: 'person'
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
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 bg-[#f0f4f3] dark:bg-[#1E332A] rounded-2xl p-8">
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

          {/* Mission & Vision */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-[#1E332A] p-8 rounded-2xl border-2 border-gray-100 dark:border-[#2A453A] shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-3xl text-primary">target</span>
                <h3 className="text-xl font-bold text-[#111816] dark:text-white">Our Mission</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {companyDetails.mission}
              </p>
            </div>

            <div className="bg-white dark:bg-[#1E332A] p-8 rounded-2xl border-2 border-gray-100 dark:border-[#2A453A] shadow-lg" id="vision">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-3xl text-primary">visibility</span>
                <h3 className="text-xl font-bold text-[#111816] dark:text-white">Our Vision</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {companyDetails.vision}
              </p>
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
                  <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">{founder.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#111816] dark:text-white">{founder.name}</h4>
                    {founder.title && (
                      <p className="text-xs font-bold text-primary uppercase tracking-wider">{founder.title}</p>
                    )}
                  </div>
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
