"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Income_expenses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Income_expenses.belongsTo(models.User, {
        as: "user",
        foreignKey: "user_id",
      });
      Income_expenses.belongsTo(models.Categories_expenses, {
        as: "categoryExpense",
        foreignKey: "category_exp_id",
      });
      Income_expenses.belongsTo(models.Expense_type, {
        as: "expenseType",
        foreignKey: "type_id",
      });
      Income_expenses.belongsTo(models.Categories_income, {
        as: "categoryIncome",
        foreignKey: "category_inc_id",
      });
    }
  }
  Income_expenses.init(
    {
      user_id: DataTypes.INTEGER,
      amountExpense: DataTypes.DOUBLE,
      type_id: DataTypes.INTEGER,
      category_exp_id: DataTypes.INTEGER,
      amountIncome: DataTypes.DOUBLE,
      category_inc_id: DataTypes.INTEGER,
      description: DataTypes.STRING,
      createdAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Income_expenses",
    }
  );
  return Income_expenses;
};
