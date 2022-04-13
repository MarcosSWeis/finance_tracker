const express = require("express");
const personalBudgetRouter = require("./personal-budget-router");
const usersRouter = require("./users");
const homeControllers = require("../controllers/api/home-controllers");
const handlerErrors = require("../middlewares/handlerErrors");

const router = express.Router();

router.get("/", homeControllers.home);

router.use("/budget", personalBudgetRouter);
router.use("/users", usersRouter);

module.exports = router;
