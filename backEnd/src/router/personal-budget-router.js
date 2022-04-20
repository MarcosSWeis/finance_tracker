const express = require("express");
const personalBudgetControllers = require("../controllers/api/personal-budget-controllers");
const userExtractor = require("../middlewares/userExtractor");

const router = express.Router();

router.get("/income", userExtractor, personalBudgetControllers.getIncomes);
router.get(
  "/categories_income",
  userExtractor,
  personalBudgetControllers.getCategories
);
router.post(
  "/create_income",
  userExtractor,
  personalBudgetControllers.createFixedIncome
);
router.post(
  "/update_income",
  userExtractor,
  personalBudgetControllers.updateIncome
);

module.exports = router;
