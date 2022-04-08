"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Anime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Anime.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      starDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Anime",
    }
  );
  return Anime;
};
