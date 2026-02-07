const express = require('express')
const ContactMessage = require('../models/ContactMessage')
const { validateContactPayload } = require('../utils/contactValidation')

const router = express.Router()

router.post('/', async (req, res) => {
  const { isValid, errors, sanitized } = validateContactPayload(req.body)

  if (!isValid) {
    return res.status(400).json({ message: 'Validation error', errors })
  }

  try {
    const savedMessage = await ContactMessage.create(sanitized)

    return res.status(201).json({
      message: 'Message received',
      id: savedMessage._id
    })
  } catch (error) {
    console.error('Failed to save contact message', error)
    return res.status(500).json({ message: 'Server error' })
  }
})

module.exports = router
