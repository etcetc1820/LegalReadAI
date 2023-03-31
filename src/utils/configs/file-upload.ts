import multer from 'multer';

export const fileUpload = multer({
  storage: multer.memoryStorage(),
  fileFilter(_req, file, callback) {
    if ('application/pdf' === file.mimetype) {
      callback(null, true);
      return;
    }

    return callback(new Error('File is no allowed'));
  },
  limits: {
    fileSize: 2 * 1024 * 1024, // 2mb
    fields: 1,
  },
});
