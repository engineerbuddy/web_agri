# MongoDB Connection Setup

Your AgriBotics contact form is now connected to MongoDB!

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the backend server:**
   ```bash
   npm run server
   ```
   The server will run on `http://localhost:5000`

3. **Start the frontend (in a new terminal):**
   ```bash
   npm run dev
   ```

## Database Details

- **Database Name:** agribotics
- **MongoDB URI:** `mongodb+srv://kuwarbhagat007:@Adarshbhagat2426@queries.efn4uf1.mongodb.net/agribotics`
- **Collection:** contacts

## What's Configured

✅ MongoDB connected to your contact form
✅ Contact submissions saved to database
✅ API endpoint: `POST /api/contact`
✅ Get all contacts: `GET /api/contacts`
✅ Server health check: `GET /api/health`

## Contact Data Structure

Each contact submission includes:
- `fullName` - User's full name
- `email` - User's email address
- `contactNo` - User's contact number
- `address` - User's address
- `query` - User's message/query
- `createdAt` - Timestamp of submission

## Important Notes

- Make sure the server is running before submitting forms
- The API endpoint is configured at `http://localhost:5000/api/contact`
- All form validations are in place
- Submitted data is automatically saved to MongoDB
