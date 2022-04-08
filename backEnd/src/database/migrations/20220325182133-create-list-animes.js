"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("list_animes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      list_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "lists",
          key: "id",
        },
      },
      personAnime_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "personal_animes",
          key: "id",
        },
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
    await queryInterface.dropTable("list_animes");
  },
};
