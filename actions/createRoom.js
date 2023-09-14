const { Player } = require("../models/Player");
const { Room } = require("../models/Room");

const createRoom = async (socket, io) => {
  try {
    let alreadyJoinedRoom = await Player.findOne({
      where: {
        id: socket?.id,
      },
    });
    if (alreadyJoinedRoom) throw new Error("You have already joined a room");
    await Room.create();
    io.emit("createRoom", { success: true });
  } catch (error) {
    socket.emit("createRoom", { success: false, msg: error.message });
  }
};

module.exports = { createRoom };
