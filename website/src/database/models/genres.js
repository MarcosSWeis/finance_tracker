"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Genre.init(
    {
      genre: DataTypes.STRING,
      anime_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Genre",
    }
  );
  return Genre;
};
