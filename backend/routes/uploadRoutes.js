import path from 'path';
import express from 'express';
import multer from 'multer';
const router = express.Router();

//cb: callback. O primeiro argumento é o erro.

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const fileTypes = /jpg|jpeg|png/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.minetype);
  if (extname && mimetype) {
    return cb(null, true); //primeiro argumento é null pq deu tudo certo
  } else {
    return cb('Images only!'); //primeiro argumento do cd é o erro
  }
}

const upload = multer({
  storage,
});

//fieldname = "image" informado
router.post('/', upload.single('image'), (req, res) => {
  res.send({
    message: 'Image Uploaded',
    image: `/${req.file.path}`,
  });
});

export default router;
