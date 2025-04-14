import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  caption: String,
  imageUrl: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Post', postSchema);