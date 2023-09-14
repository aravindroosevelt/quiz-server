"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.bulkInsert(
        "Questions",
        [
          {
            question: "What is the capital of india?",
            answer: "Delhi",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            question: "Who is the first vice prime minister of india?",
            answer: "Radhakrishnan",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            question: "The largest clock in the world where is located?",
            answer: "Vatican",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            question: "Which country landed first in the moon's south pole?",
            answer: "India",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            question: "World's first richest country?",
            answer: "Luxembourg",
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
