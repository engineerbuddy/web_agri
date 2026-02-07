const mongoose = require('mongoose')

const mongoUri = process.env.MONGODB_URI
if (!mongoUri) {
  throw new Error('MONGODB_URI is not set')
}

let cached = global.mongoose
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(mongoUri)
  }

  cached.conn = await cached.promise
  return cached.conn
}

module.exports = connectToDatabase
