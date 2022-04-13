"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("expense_types", [
      {
        type: "Gasto fijo",
      },
      {
        type: "Gasto flexible",
      },
      {
        type: "Ahorro",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("expense_types", null, {});
  },
};
