const { Op } = require("sequelize");
const { Player } = require("../models/Player");
const { Room } = require("../models/Room");

const cleanup = () => {
  Room.destroy({
    where: { id: { [Op.ne]: null } },
  }).then(() => console.log("Done"));

  Player.destroy({
    where: { id: { [Op.ne]: null } },
  }).then(() => console.log("Done"));
};

module.exports = {
  cleanup,
};
