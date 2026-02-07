import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cachedClient = client;
  return client;
}

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const { fullName, email, contactNo, address, query } = req.body;

      // Validation
      if (!fullName || !email || !contactNo || !address || !query) {
        return res.status(400).json({ 
          success: false, 
          message: 'All fields are required' 
        });
      }

      // Connect to MongoDB
      const client = await connectToDatabase();
      const db = client.db('agribotics');
      const collection = db.collection('contacts');

      // Insert contact submission
      const result = await collection.insertOne({
        fullName,
        email,
        contactNo,
        address,
        query,
        createdAt: new Date(),
        status: 'new'
      });

      return res.status(201).json({
        success: true,
        message: 'Contact form submitted successfully',
        id: result.insertedId
      });

    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  }

  // GET request - retrieve all contacts (for admin)
  if (req.method === 'GET') {
    try {
      const client = await connectToDatabase();
      const db = client.db('agribotics');
      const collection = db.collection('contacts');

      const contacts = await collection.find({}).sort({ createdAt: -1 }).limit(100).toArray();

      return res.status(200).json({
        success: true,
        count: contacts.length,
        data: contacts
      });

    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}