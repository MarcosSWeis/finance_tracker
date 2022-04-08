"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Anime_review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Anime_review.belongsTo(models.User, {
        foreignKey: "user_id",
      });
    }
  }
  Anime_review.init(
    {
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Anime_review",
    }
  );
  return Anime_review;
};
