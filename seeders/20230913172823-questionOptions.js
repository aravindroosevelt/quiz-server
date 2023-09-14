"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.bulkInsert(
        "QuestionOptions",
        [
          {
            questionID: 1,
            option: "Tamilnadu",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            questionID: 1,
            option: "Delhi",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            questionID: 2,
            option: "Radhakrishnan",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            questionID: 2,
            option: "Narendra Modi",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            questionID: 3,
            option: "Vatican",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            questionID: 3,
            option: "China",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            questionID: 4,
            option: "India",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            questionID: 4,
            option: "Russia",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            questionID: 5,
            option: "Luxembourg",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            questionID: 5,
            option: "America",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      ),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([]);
  },
};
