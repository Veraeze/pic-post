import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import postRoutes from './routes/postRoutes.js'

dotenv.config();
const app = express();
const port = 4000;

// app.options('*', cors());
app.use(cors());
app.use(express.json());
app.use('/picpost', postRoutes);

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
  

// app.get('/hello', (req, res) => {
//   res.json({ message: 'hello, vera'});
// })

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});