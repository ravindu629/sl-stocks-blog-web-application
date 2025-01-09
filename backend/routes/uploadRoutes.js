import path from "path";
import express from "express";
import multer from "multer";
const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function fileFilter(req, file, cb) {
  // Add more extensions and mimetypes for the required file types
  const filetypes = /jpe?g|png|webp|txt|xlsx?|xls|pdf|docx?|pptx?/;
  const mimetypes =
    /image\/jpe?g|image\/png|image\/webp|text\/plain|application\/vnd\.openxmlformats-officedocument\..+|application\/pdf|application\/msword|application\/vnd\.ms-excel|application\/vnd\.ms-powerpoint/;

  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = mimetypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type!"), false);
  }
}

const upload = multer({ storage, fileFilter });
const uploadSingleFile = upload.single("file");

router.post("/", (req, res) => {
  uploadSingleFile(req, res, function (err) {
    if (err) {
      return res.status(400).send({ message: err.message });
    }

    res.status(200).send({
      message: "File uploaded successfully",
      file_path: `/${req.file.path}`,
    });
  });
});

export default router;
