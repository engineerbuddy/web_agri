const mongoose = require('mongoose')

const contactMessageSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    contactNo: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    query: { type: String, required: true, trim: true }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.models.ContactMessage || mongoose.model('ContactMessage', contactMessageSchema)
