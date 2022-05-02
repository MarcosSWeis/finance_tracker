"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Fixed_income extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Fixed_income.belongsTo(models.User, {
        as: "user",
        foreignKey: "user_id",
      });

      Fixed_income.belongsTo(models.Categories_income, {
        as: "categoryIncome",
        foreignKey: "category_inc_id",
      });
    }
  }
  Fixed_income.init(
    {
      user_id: DataTypes.INTEGER,
      fixed_income: DataTypes.DOUBLE,
      category_inc_id: DataTypes.INTEGER,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Fixed_income",
    }
  );
  return Fixed_income;
};
