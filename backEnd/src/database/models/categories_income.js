"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Categories_income extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categories_income.hasMany(models.Fixed_income, {
        as: "fixedIncome",
        foreignKey: "category_inc_id",
      });
      Categories_income.hasMany(models.Income_expenses, {
        as: "incomeExpense",
        foreignKey: "category_inc_id",
      });
    }
  }
  Categories_income.init(
    {
      category: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Categories_income",
    }
  );
  return Categories_income;
};
