const { Room } = require("../models/Room");
const { Player } = require("../models/Player");

const getRooms = async (socket) => {
  try {
    let res = await Room.findAll({
      include: [Player],
    });
    socket.emit("getRooms", {
      success: true,
      data: res,
    });
  } catch (error) {
    socket.emit("getRooms", { success: false, msg: error.message });
  }
};

module.exports = { getRooms };
