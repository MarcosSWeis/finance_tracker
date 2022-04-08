"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Comments_list extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comments_list.init(
    {
      list_id: DataTypes.INTEGER,
      comment_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Comments_list",
    }
  );
  return Comments_list;
};
