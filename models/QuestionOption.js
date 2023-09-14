const { DataTypes } = require("sequelize");
const { db } = require("../db");

const QuestionOption = db.define("QuestionOption", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  questionID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  option: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = {
  QuestionOption,
};
