import * as fs from 'node:fs/promises';
import path from 'node:path';

import * as UserServices from '../services/users.js';

import { uploadToCloudinary } from '../utils/uploadToCloudinary.js';

async function changeUserAvatar(req, res, next) {
  if (process.env.ENABLE_CLOUDINARY === 'true') {
    const response = await uploadToCloudinary(req.file.path);
    await fs.unlink(req.file.path);

    await UserServices.changeUserAvatar(req.user._id, response.secure_url);
  } else {
    await fs.rename(
      req.file.path,
      path.resolve('src', 'uploads', 'avatars', req.file.filename),
    );

    await UserServices.changeUserAvatar(
      req.user._id,
      `http://localhost:8080/avatars/${req.file.filename}`,
    );
  }

  res.send({ status: 200, message: 'Avatar changed successfully' });
}

export { changeUserAvatar };
