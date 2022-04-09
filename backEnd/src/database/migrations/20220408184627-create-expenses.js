"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("expenses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      income_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "incomes",
          key: "id",
        },
      },
      type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "expense_types",
          key: "id",
        },
      },
      amount: {
        type: Sequelize.DOUBLE,
      },
      category_exp_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "categories_expenses",
          key: "id",
        },
      },
      description: {
        type: Sequelize.STRING(100),
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
    await queryInterface.dropTable("expenses");
  },
};
