"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Title extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Title.init(
    {
      en: DataTypes.STRING,
      en_jp: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Title",
    }
  );
  return Title;
};
