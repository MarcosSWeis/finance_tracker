const express = require("express");

const usersControllers = require("../controllers/api/users-controllers");
const userExtractor = require("../middlewares/userExtractor");
const uploadFiles = require("../middlewares/users/user-multer");
const router = express.Router();
const response = {
  meta: {
    ok: true,
    status: 200,
    statusText: "OK",
    url: "http://localhost:3001/users/checkingToken",
  },
};

router.get("/list", usersControllers.list);

router.post("/register", uploadFiles.single("avatar"), usersControllers.register);

//nota , si en react uso new FromData para mandar el formulario , tengo qeu poner si o si el middleware de multer para que me aparezca el req.body en el controller
router.post("/login", usersControllers.login);
//router.post("/posts", usersControllers.post)

router.post("/checkingToken", userExtractor, (req, res) => {
  res.status(200).json(response);
});
module.exports = router;
