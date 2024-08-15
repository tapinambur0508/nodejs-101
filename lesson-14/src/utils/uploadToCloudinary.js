import { v2 as cloudinary } from 'cloudinary';

import { CLOUDINARY } from '../constants/index.js';

cloudinary.config({
  cloud_name: CLOUDINARY.CLOUD_NAME,
  api_key: CLOUDINARY.API_KEY,
  api_secret: CLOUDINARY.API_SECRET,
});

function uploadToCloudinary(filePath) {
  return cloudinary.uploader.upload(filePath);
}

export { uploadToCloudinary };
