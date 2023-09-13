const { Player } = require("../models/Player");

const joinRoom = async (socket, io, param) => {
  try {
    await Player.create({ id: socket?.id, roomId: param?.room?.id });
    socket.join(param?.room?.name);
    socket.emit("joinRoom", {
      success: true,
    });
    io.emit("refetchRooms");
  } catch (error) {
    console.log("====== JOIN ERROR ======");
    console.log(error?.message);
  }
};

module.exports = { joinRoom };
