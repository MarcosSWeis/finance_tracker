const express = require("express");
const usersControllers = require("../controllers/api/users-controllers");
const uploadFiles = require("../middlewares/users/user-multer");
const router = express.Router();

router.get("/list", usersControllers.list);
router.post(
  "/register",
  uploadFiles.single("avatar"),
  usersControllers.register
);
//nota , si en react uso new FromData para mandar el formulario , tengo qeu poner si o si el middleware de multer para que me aparezca el req.body en el controller
router.post("/login", usersControllers.login);
//router.post("/posts", usersControllers.post);
module.exports = router;
