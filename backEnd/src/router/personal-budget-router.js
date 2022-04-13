const express = require("express");
const personalBudgetControllers = require("../controllers/api/personal-budget-controllers");
const userExtractor = require("../middlewares/userExtractor");

const router = express.Router();

router.get("/", userExtractor, personalBudgetControllers.totalIncomes);
router.get(
  "/categories_income",
  userExtractor,
  personalBudgetControllers.getCategories
);
router.post("/create", userExtractor, personalBudgetControllers.fixedIncome);

module.exports = router;
