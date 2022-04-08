"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("animes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.INTEGER,
        references: {
          model: "titles",
          key: "id",
        },
      },
      description: {
        type: Sequelize.TEXT,
      },
      starDate: {
        type: Sequelize.DATE,
      },
      endDate: {
        type: Sequelize.DATE,
      },
      subtype: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      episodeLength: {
        type: Sequelize.INTEGER,
      },
      episodeCount: {
        type: Sequelize.INTEGER,
      },
      posterAnime: {
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
    await queryInterface.dropTable("animes");
  },
};
