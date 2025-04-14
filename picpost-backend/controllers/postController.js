// import { v2 as cloudinary } from 'cloudinary';
import postModel from '../models/postModel.js';
import cloudinary from '../config/cloudinary.js';

const addPost = async (req, res) => {
  try {

    // Access uploaded image from req.file
    const image = req.file;

    if (!image) {
      return res.status(400).json({ success: false, message: "No image uploaded" });
    }

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(image.path, {
      resource_type: 'image',
      folder: 'picpost',
    });

    // Save to MongoDB
    const postData = {
      imageUrl: result.secure_url,
    };

    const postImage = new postModel(postData);
    await postImage.save();

    res.json({ success: true, message: "Post uploaded", data: postData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const getPost = async (req, res) => {
    try {
        const posts = await postModel.find().sort({ createdAt: -1 });
        res.json({success: true, data: posts})
    } catch (error) {
        console.error('fetch error:', error);
        res.status(500).json({success: false, message: error.message});
    }
}

export {addPost, getPost};