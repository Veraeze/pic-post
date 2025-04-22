import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  caption: String,
  imageUrl: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Post', postSchema);