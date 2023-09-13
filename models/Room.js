const { DataTypes } = require("sequelize");
const { db } = require("../db");

const Room = db.define("room", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
});

module.exports = {
  Room,
};
