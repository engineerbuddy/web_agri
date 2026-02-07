const express = require('express')
const cors = require('cors')
const connectToDatabase = require('./src/utils/db')

require('dotenv').config()

const contactRoutes = require('./src/routes/contactRoutes')

const app = express()
const PORT = process.env.PORT || 5000

const corsOrigin = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map((origin) => origin.trim()).filter(Boolean)
  : '*'

app.use(
  cors({
    origin: corsOrigin,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
  })
)
app.use(express.json({ limit: '1mb' }))

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/contact', contactRoutes)

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.error('MongoDB connection failed', error)
    process.exit(1)
  })
