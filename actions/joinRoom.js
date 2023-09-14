const { Player } = require("../models/Player");

const joinRoom = async (socket, io, param) => {
  try {
    await Player.create({ id: socket?.id, roomId: param?.room?.id });
    socket.join(param?.room?.name);
    socket.emit("joinRoom", {
      success: true,
      room: param?.room?.name,
    });
    io.emit("refetchRooms");
  } catch (error) {
    socket.emit("joinRoom", {
      success: false,
      msg: "You have already joined a room",
    });
  }
};

module.exports = { joinRoom };
