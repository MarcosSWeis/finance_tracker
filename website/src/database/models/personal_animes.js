"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Personal_anime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Personal_anime.init(
    {
      anime_id: DataTypes.INTEGER,
      status: DataTypes.STRING,
      seenDate: DataTypes.DATE,
      pjFavorite: DataTypes.STRING,
      score: DataTypes.INTEGER,
      comment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Personal_anime",
    }
  );
  return Personal_anime;
};
