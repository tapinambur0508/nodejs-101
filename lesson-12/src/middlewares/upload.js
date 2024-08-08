import path from 'node:path';
import crypto from 'node:crypto';

import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve('src', 'tmp'));
  },
  filename: function (req, file, cb) {
    // const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const uniquePrefix = crypto.randomUUID();

    cb(null, `${uniquePrefix}_${file.originalname}`);
  },
});

export const upload = multer({ storage });
