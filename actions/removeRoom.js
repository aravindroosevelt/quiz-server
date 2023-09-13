const { Room } = require("../models/Room");
const { Player } = require("../models/Player");

const removeRoom = async (socket, io) => {
  try {
    let room = await Player.findOne({
      where: {
        id: socket.id,
      },
      include: [Room],
      raw: true,
    });
    if (!room) return null;
    await Player.destroy({
      where: {
        id: socket.id,
      },
    });
    let playerAvailable = await Player.findOne({
      where: {
        roomId: room?.["room.id"],
      },
      raw: true,
    });
    if (playerAvailable) {
      io.to(room?.["room.name"]).emit("wins");
      await Room.destroy({
        where: {
          id: room?.["room.id"],
        },
      });
    }
    io.emit("roomDeleted");
  } catch (error) {
    console.log("=========== REMOVAL ERROR ==========");
    console.log(error);
  }
};

module.exports = { removeRoom };
