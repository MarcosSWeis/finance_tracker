const multer = require("multer");
const path = require("path");
const imagesUserPath = path.join(__dirname, "../../../public/img/users");
/*** seteo => donde guarda multer los archivos ***/

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, imagesUserPath);
  },
  /*** seteo=> Con que nombre guarda multer los archivos ***/

  filename: (req, file, cb) => {
    const fileName =
      `user_${Date.now()}_avatar` + path.extname(file.originalname);
    if (fileName) {
      cb(null, fileName);
    } else {
      const defaultPhoto = "default.png";
      cb(null, defaultPhoto);
    }
  },
});
const uploadFiles = multer({ storage });

module.exports = uploadFiles;
