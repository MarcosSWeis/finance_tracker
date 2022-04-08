"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("personal_animes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      anime_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "animes",
          key: "id",
        },
      },
      status: {
        type: Sequelize.STRING(30),
      },
      seenDate: {
        type: Sequelize.DATE,
      },
      pjFavorite: {
        type: Sequelize.STRING(30),
      },
      score: {
        type: Sequelize.INTEGER,
      },
      comment: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("personal_animes");
  },
};
