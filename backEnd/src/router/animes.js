const express = require("express");
const animesControllers = require("../controllers/api/animes-controllers");
const userExtractor = require("../middlewares/userExtractor");

const router = express.Router();

router.get("/", userExtractor, animesControllers.list);

module.exports = router;
