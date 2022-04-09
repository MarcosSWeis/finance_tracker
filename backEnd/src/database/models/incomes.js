"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Incomes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Incomes.belongsTo(models.User, {
        foreignKey: "user_id",
      });

      Incomes.belongsTo(models.Categories_income, {
        foreignKey: "category_inc_id",
      });
      Incomes.hasMany(models.Expenses, {
        foreignKey: "income_id",
      });
    }
  }
  Incomes.init(
    {
      user_id: DataTypes.INTEGER,
      fixed_income: DataTypes.DOUBLE,
      income: DataTypes.DOUBLE,
      category_inc_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Incomes",
    }
  );
  return Incomes;
};
