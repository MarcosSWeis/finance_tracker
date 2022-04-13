"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories_expenses", [
      {
        category: "Alquiler",
      },
      {
        category: "Electricidad",
      },
      {
        category: "Gas",
      },
      {
        category: "Teléfono Móvil",
      },
      {
        category: "Tarjeta de Crédito",
      },
      {
        category: "Préstamo",
      },
      {
        category: "Alquiler",
      },
      {
        category: "Cine",
      },
      {
        category: "Ahorros imperativos",
      },
      {
        category: "Expensas",
      },
      {
        category: "Vacaciones",
      },
      {
        category: "Ahorro para vacaciones",
      },
      {
        category: "Ahorro para fiesta",
      },
      {
        category: "Cable",
      },
      {
        category: "Cuota",
      },
      {
        category: "Varios",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories_expenses", null, {});
  },
};
