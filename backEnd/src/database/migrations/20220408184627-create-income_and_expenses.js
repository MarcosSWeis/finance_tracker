"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("income_expenses", {
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
      amountExpense: {
        type: Sequelize.DOUBLE,
      },
      type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "expense_types",
          key: "id",
          allowNull: true,
        },
        allowNull: true,
      },
      category_exp_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "categories_expenses",
          key: "id",
          allowNull: true,
        },
        allowNull: true,
      },
      amountIncome: {
        type: Sequelize.DOUBLE,
      },
      category_inc_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "categories_incomes",
          key: "id",
          allowNull: true,
        },
        allowNull: true,
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
    await queryInterface.dropTable("income_expenses");
  },
};
