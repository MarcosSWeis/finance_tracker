"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Expense_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Expense_type.hasMany(models.Income_expenses, {
        as: "incomeExpense",
        foreignKey: "type_id",
      });
    }
  }
  Expense_type.init(
    {
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Expense_type",
    }
  );
  return Expense_type;
};
