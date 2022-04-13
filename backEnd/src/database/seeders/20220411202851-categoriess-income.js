"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories_incomes", [
      {
        category: "Trabajo",
      },
      {
        category: "Trabajo temporaneo",
      },
      {
        category: "Horas extras",
      },
      {
        category: "Favor",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories_incomes", null, {});
  },
};
