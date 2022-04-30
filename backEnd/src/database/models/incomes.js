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
        as: "user",
        foreignKey: "user_id",
      });

      Incomes.belongsTo(models.Categories_income, {
        as: "categoryIncome",
        foreignKey: "category_inc_id",
      });
    }
  }
  Incomes.init(
    {
      user_id: DataTypes.INTEGER,
      fixed_income: DataTypes.DOUBLE,
      varied_income: DataTypes.DOUBLE,
      category_inc_id: DataTypes.INTEGER,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Incomes",
    }
  );
  return Incomes;
};
