"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("incomes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      fixed_income: {
        type: Sequelize.DOUBLE,
      },
      varied_income: {
        type: Sequelize.DOUBLE,
      },
      category_inc_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "categories_incomes",
          key: "id",
        },
      },
      description: {
        type: Sequelize.STRING(25),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("incomes");
  },
};
