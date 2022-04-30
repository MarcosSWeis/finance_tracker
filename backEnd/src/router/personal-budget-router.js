const express = require("express");
const personalBudgetControllers = require("../controllers/api/personal-budget-controllers");
const userExtractor = require("../middlewares/userExtractor");

const router = express.Router();

router.get("/income", userExtractor, personalBudgetControllers.getIncomes);

router.get(
  "/categories_income",
  userExtractor,
  personalBudgetControllers.getCategoriesIncome
);
router.get(
  "/categories_expenses",
  userExtractor,
  personalBudgetControllers.getCategoriesExpenses
);

router.get("/expenses", userExtractor, personalBudgetControllers.getExpenses);

router.get(
  "/all_expenses",
  userExtractor,
  personalBudgetControllers.getAllExpenses
);

router.get(
  "/expenses_line_graphic",
  userExtractor,
  personalBudgetControllers.getLineGraphicExpenses
);

router.get(
  "/expense_type",
  userExtractor,
  personalBudgetControllers.getExpenseType
);

router.post(
  "/create_income",
  userExtractor,
  personalBudgetControllers.createFixedIncome
);

router.post(
  "/create_expense",
  userExtractor,
  personalBudgetControllers.createExpense
);

router.post(
  "/update_income",
  userExtractor,
  personalBudgetControllers.updateIncome
);

module.exports = router;
