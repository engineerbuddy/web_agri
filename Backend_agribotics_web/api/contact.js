const connectToDatabase = require('../src/utils/db')
const ContactMessage = require('../src/models/ContactMessage')
const { validateContactPayload } = require('../src/utils/contactValidation')

const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map((origin) => origin.trim()).filter(Boolean)
  : ['*']

const resolveCorsOrigin = (origin) => {
  if (allowedOrigins.includes('*')) {
    return '*'
  }
  if (origin && allowedOrigins.includes(origin)) {
    return origin
  }
  return allowedOrigins[0] || 'null'
}

module.exports = async (req, res) => {
  const origin = req.headers.origin
  res.setHeader('Access-Control-Allow-Origin', resolveCorsOrigin(origin))
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.statusCode = 204
    res.end()
    return
  }

  if (req.method !== 'POST') {
    res.statusCode = 405
    res.json({ message: 'Method not allowed' })
    return
  }

  const { isValid, errors, sanitized } = validateContactPayload(req.body)
  if (!isValid) {
    res.statusCode = 400
    res.json({ message: 'Validation error', errors })
    return
  }

  try {
    await connectToDatabase()
    const savedMessage = await ContactMessage.create(sanitized)
    res.statusCode = 201
    res.json({ message: 'Message received', id: savedMessage._id })
  } catch (error) {
    console.error('Failed to save contact message', error)
    res.statusCode = 500
    res.json({ message: 'Server error' })
  }
}
