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
        foreignKey: "user_id",
      });
      Expenses.belongsTo(models.Categories_expenses, {
        foreignKey: "category_exp_id",
      });
      Expenses.belongsTo(models.Expense_type, {
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
