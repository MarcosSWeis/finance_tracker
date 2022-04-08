"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class List_anime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  List_anime.init(
    {
      list_id: DataTypes.INTEGER,
      personAnime_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "List_anime",
    }
  );
  return List_anime;
};
