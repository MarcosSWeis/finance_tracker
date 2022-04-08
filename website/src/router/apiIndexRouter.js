const express = require("express");
const animesRouter = require("./animes");
const usersRouter = require("./users");
const homeControllers = require("../controllers/api/home-controllers");
const router = express.Router();

router.get("/", homeControllers.home);
router.use("/animes", animesRouter);
router.use("/users", usersRouter);

module.exports = router;
