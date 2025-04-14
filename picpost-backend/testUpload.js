import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dbkeomqqj',
  api_key: '532645294198817',
  api_secret: 'UiXP3pXMNXQosFltl3JQ8r55xyI',
});

cloudinary.uploader.upload('./IMG_0641.jpg', (error, result) => {
  if (error) {
    console.error('Upload failed:', error);
  } else {
    console.log('Upload success:', result.secure_url);
  }
});