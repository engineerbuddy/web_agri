import { useState } from 'react'

function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

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

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!email) {
      setStatus('error')
      setTimeout(() => setStatus(''), 3000)
      return
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('invalid')
      setTimeout(() => setStatus(''), 3000)
      return
    }
    
    setStatus('loading')
    
    setTimeout(() => {
      setEmail('')
      setStatus('success')
      setTimeout(() => setStatus(''), 3000)
    }, 1500)
  }

  return (
    <>
      <footer className="bg-[#f0f4f3] dark:bg-[#0d1c17] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Company & Founders Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-gray-200 dark:border-[#1E332A]">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="size-6 sm:size-8 text-primary">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl">agriculture</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111816] dark:text-white">AgriBotics</h2>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 sm:mb-6 leading-relaxed">
                Cultivating a smarter future for agriculture through data and robotics.
              </p>

              {/* Company Details */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
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
              <div className="bg-white dark:bg-[#1E332A] p-6 rounded-2xl border border-gray-100 dark:border-[#2A453A]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-2xl text-primary">target</span>
                  <h3 className="text-lg font-bold text-[#111816] dark:text-white">Our Mission</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {companyDetails.mission}
                </p>
              </div>

              <div className="bg-white dark:bg-[#1E332A] p-6 rounded-2xl border border-gray-100 dark:border-[#2A453A]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-2xl text-primary">visibility</span>
                  <h3 className="text-lg font-bold text-[#111816] dark:text-white">Our Vision</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {companyDetails.vision}
                </p>
              </div>
            </div>
          </div>

          {/* Founders Section */}
          <div className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-gray-200 dark:border-[#1E332A]">
            <h3 className="text-xl sm:text-2xl font-bold text-[#111816] dark:text-white mb-6 sm:mb-8">Meet Our Founders</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {founders.map((founder, index) => (
                <div key={index} className="bg-white dark:bg-[#1E332A] p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-100 dark:border-[#2A453A] hover:shadow-lg dark:hover:shadow-lg transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-2xl">{founder.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#111816] dark:text-white">{founder.name}</h4>
                      {founder.title ? (
                        <p className="text-xs font-bold text-primary uppercase">{founder.title}</p>
                      ) : null}
                    </div>
                  </div>
                  {founder.background ? (
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {founder.background}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          {/* Original Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <h4 className="font-bold text-[#111816] dark:text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li><a className="hover:text-primary transition-colors" href="#">Mobile App</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Sensors</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Robotics</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-[#111816] dark:text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
              </ul>
            </div>
            
            <div className="col-span-1 lg:col-span-2">
              <h4 className="font-bold text-[#111816] dark:text-white mb-4">Farm Insights</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Get the latest AgriBotics news delivered weekly.
              </p>
              <form onSubmit={handleSubmit} className="relative flex items-center">
                <input
                  className="w-full h-12 pl-4 pr-12 rounded-xl bg-white dark:bg-[#152620] border border-gray-200 dark:border-[#1E332A] focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                  type="submit"
                  className="absolute right-1 top-1 h-10 w-10 bg-primary rounded-lg flex items-center justify-center text-[#10221c] hover:bg-[#0fb881] transition-colors"
                  disabled={status === 'loading'}
                >
                  <span className="material-symbols-outlined text-lg">
                    {status === 'loading' ? 'refresh' : 'arrow_forward'}
                  </span>
                </button>
              </form>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200 dark:border-[#1E332A] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">© 2025 AgriBotics Inc. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-gray-400">
              <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Notification Toast */}
      {status && (
        <div className={`fixed top-20 right-4 z-50 px-6 py-4 rounded-xl shadow-lg backdrop-blur-md border transform transition-all duration-300 ${
          status === 'success' ? 'bg-primary/90 border-primary text-[#10221c]' :
          status === 'loading' ? 'bg-gray-800/90 border-gray-700 text-white' :
          'bg-red-500/90 border-red-600 text-white'
        }`}>
          {status === 'success' && 'Thanks for subscribing! 🌱'}
          {status === 'loading' && 'Processing...'}
          {status === 'error' && 'Please enter your email address'}
          {status === 'invalid' && 'Please enter a valid email address'}
        </div>
      )}
    </>
  )
}

export default Footer
