"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Categories_expenses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categories_expenses.hasMany(models.Expenses, {
        foreignKey: "category_exp_id",
      });
    }
  }
  Categories_expenses.init(
    {
      category: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Categories_expenses",
    }
  );
  return Categories_expenses;
};
