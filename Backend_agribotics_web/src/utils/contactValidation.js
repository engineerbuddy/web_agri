const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
const normalizePhone = (value) => (value || '').replace(/\D/g, '')

const validateContactPayload = (payload = {}) => {
  const errors = {}
  const fullName = payload.fullName ? payload.fullName.trim() : ''
  const email = payload.email ? payload.email.trim().toLowerCase() : ''
  const contactNo = payload.contactNo ? payload.contactNo.trim() : ''
  const address = payload.address ? payload.address.trim() : ''
  const query = payload.query ? payload.query.trim() : ''

  if (!fullName) {
    errors.fullName = 'Full name is required'
  }

  if (!email) {
    errors.email = 'Email is required'
  } else if (!isValidEmail(email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!contactNo) {
    errors.contactNo = 'Contact number is required'
  } else if (normalizePhone(contactNo).length < 10) {
    errors.contactNo = 'Please enter a valid contact number'
  }

  if (!address) {
    errors.address = 'Address is required'
  }

  if (!query) {
    errors.query = 'Please describe your query'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized: {
      fullName,
      email,
      contactNo,
      address,
      query
    }
  }
}

module.exports = { validateContactPayload }
