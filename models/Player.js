const { DataTypes } = require("sequelize");
const { db } = require("../db");

const Player = db.define("Player", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  roomId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = {
  Player,
};
