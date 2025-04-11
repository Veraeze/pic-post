import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const connectDB = async () => {
    const mongoURI = process.env.MONGO_URI;
  
    if (mongoURI && (mongoURI.startsWith('mongodb://') || mongoURI.startsWith('mongodb+srv://'))) {
      try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
      } catch (err) {
        console.error('MongoDB connection failed', err);
      }
    } else {
      console.log('MongoDB URI is not set correctly or is missing. Skipping MongoDB connection.');
    }
  };
  
  connectDB();
  

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log('mongodb connected')).catch((err) => console.error('mongodb connection failed', err));

app.get('/', (req, res) => {
    res.send('picpost backend is running');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});