import express from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { changeUserAvatar } from '../controllers/users.js';
import { auth } from '../middlewares/auth.js';
import { upload } from '../middlewares/upload.js';

const router = express.Router();

router.post(
  '/users/avatar',
  auth,
  upload.single('avatar'),
  ctrlWrapper(changeUserAvatar),
);

export default router;
