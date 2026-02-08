import { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNo: '',
    address: '',
    query: ''
  })

  const [status, setStatus] = useState('')
  const [errors, setErrors] = useState({})

  // List of known email providers
  const knownEmailDomains = [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com',
    'protonmail.com', 'pm.me', 'mail.com', 'icloud.com', 'aol.com',
    'ymail.com', 'rocketmail.com', 'zoho.com', 'tutanota.com', 'cock.li',
    'gmx.com', 'web.de', 'mailbox.org', 'posteo.de', 'proton.me'
  ]

  const isValidEmailDomain = (email) => {
    const domain = email.split('@')[1]?.toLowerCase()
    return domain && knownEmailDomains.includes(domain)
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    } else if (!isValidEmailDomain(formData.email)) {
      newErrors.email = 'Please use a known email provider (Gmail, Yahoo, Outlook, etc.)'
    }

    if (!formData.contactNo.trim()) {
      newErrors.contactNo = 'Contact number is required'
    } else if (!/^\d{10,}$/.test(formData.contactNo.replace(/\D/g, ''))) {
      newErrors.contactNo = 'Please enter a valid contact number'
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required'
    }

    if (!formData.query.trim()) {
      newErrors.query = 'Please describe your query'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      setStatus('error')
      setTimeout(() => setStatus(''), 3000)
      return
    }

    setStatus('loading')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
          name: formData.fullName,
          email: formData.email,
          phone: formData.contactNo,
          address: formData.address,
          message: formData.query,
          subject: 'New Contact Form Submission - AgriBotics Web',
          from_name: 'AgriBotics Website',
          to: import.meta.env.VITE_CONTACT_EMAIL
        })
      })

      const result = await response.json()

      if (result.success) {
        setFormData({
          fullName: '',
          email: '',
          contactNo: '',
          address: '',
          query: ''
        })
        setErrors({})
        setStatus('success')
        setTimeout(() => setStatus(''), 5000)
      } else {
        throw new Error(result.message || 'Submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
      setTimeout(() => setStatus(''), 3000)
    }
  }

  return (
    <section className="py-16 sm:py-20 lg:py-32 w-full bg-white dark:bg-background-dark" id="contact">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Get in Touch</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111816] dark:text-white mb-4 leading-tight">
            Contact Our Team
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Have questions about AgriBotics? We'd love to hear from you. Fill out the form below and we'll get back to you shortly.
          </p>
        </div>

        <div className="bg-white dark:bg-[#1E332A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg border border-gray-100 dark:border-[#2A453A]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-[#111816] dark:text-white mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#152620] border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.fullName 
                      ? 'border-red-500 dark:border-red-500' 
                      : 'border-gray-200 dark:border-[#2A453A] focus:border-primary'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-[#111816] dark:text-white mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#152620] border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.email 
                      ? 'border-red-500 dark:border-red-500' 
                      : 'border-gray-200 dark:border-[#2A453A] focus:border-primary'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Contact Number */}
              <div>
                <label className="block text-sm font-bold text-[#111816] dark:text-white mb-2">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#152620] border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.contactNo 
                      ? 'border-red-500 dark:border-red-500' 
                      : 'border-gray-200 dark:border-[#2A453A] focus:border-primary'
                  }`}
                />
                {errors.contactNo && (
                  <p className="text-red-500 text-xs mt-1">{errors.contactNo}</p>
                )}
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-[#111816] dark:text-white mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="123 Farm Lane, Agricultural City, AC 12345"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#152620] border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.address 
                      ? 'border-red-500 dark:border-red-500' 
                      : 'border-gray-200 dark:border-[#2A453A] focus:border-primary'
                  }`}
                />
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                )}
              </div>

              {/* Query */}
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-[#111816] dark:text-white mb-2">
                  Your Query *
                </label>
                <textarea
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  placeholder="Tell us about your agricultural needs and how we can help..."
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#152620] border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
                    errors.query 
                      ? 'border-red-500 dark:border-red-500' 
                      : 'border-gray-200 dark:border-[#2A453A] focus:border-primary'
                  }`}
                />
                {errors.query && (
                  <p className="text-red-500 text-xs mt-1">{errors.query}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-primary hover:bg-[#0fb881] disabled:bg-gray-400 text-[#10221c] text-base font-bold shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-0.5 disabled:hover:translate-y-0"
              >
                {status === 'loading' ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">refresh</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined">send</span>
                    Send Message
                  </>
                )}
              </button>
              <button
                type="reset"
                onClick={() => {
                  setFormData({
                    fullName: '',
                    email: '',
                    contactNo: '',
                    address: '',
                    query: ''
                  })
                  setErrors({})
                }}
                className="h-12 px-8 rounded-xl bg-gray-200 hover:bg-gray-300 dark:bg-[#2A453A] dark:hover:bg-[#354A45] text-[#111816] dark:text-white text-base font-bold transition-colors"
              >
                Clear
              </button>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              * Required fields. We'll respond to your inquiry within 24 hours.
            </p>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      {status && (
        <div className={`fixed top-20 right-4 z-50 px-6 py-4 rounded-xl shadow-lg backdrop-blur-md border transform transition-all duration-300 ${
          status === 'success' ? 'bg-primary/90 border-primary text-[#10221c]' :
          status === 'loading' ? 'bg-gray-800/90 border-gray-700 text-white' :
          'bg-red-500/90 border-red-600 text-white'
        }`}>
          {status === 'success' && 'Message sent successfully! We\'ll be in touch soon.'}
          {status === 'loading' && 'Sending your message...'}
          {status === 'error' && 'Please fix the errors and try again.'}
        </div>
      )}
    </section>
  )
}

export default ContactForm
