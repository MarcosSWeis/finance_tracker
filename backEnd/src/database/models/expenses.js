"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Expenses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Expenses.belongsTo(models.User, {
        as: "user",
        foreignKey: "user_id",
      });
      Expenses.belongsTo(models.Categories_expenses, {
        as: "categoryExpense",
        foreignKey: "category_exp_id",
      });
      Expenses.belongsTo(models.Expense_type, {
        as: "expenseType",
        foreignKey: "type_id",
      });
    }
  }
  Expenses.init(
    {
      user_id: DataTypes.INTEGER,
      type_id: DataTypes.INTEGER,
      amount: DataTypes.DOUBLE,
      category_exp_id: DataTypes.INTEGER,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Expenses",
    }
  );
  return Expenses;
};
