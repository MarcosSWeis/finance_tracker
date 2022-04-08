"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  List.init(
    {
      profile_id: DataTypes.INTEGER,
      nameList: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "List",
    }
  );
  return List;
};
