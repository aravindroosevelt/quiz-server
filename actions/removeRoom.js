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
    let res = await Player.update(
      {
        isActive: false,
      },
      {
        where: {
          id: socket.id,
        },
      }
    );
    let playersAvailable = await Player.findAll({
      where: {
        roomId: room?.["room.id"],
        isActive: false,
      },
      raw: true,
    });
    if (playersAvailable.length >= 2) {
      io.to(room?.["room.name"]).emit("done");
      await Room.destroy({
        where: {
          id: room?.["room.id"],
        },
      });
      await Player.destroy({
        where: {
          roomId: room?.["room.id"],
        },
      });
      io.emit("roomDeleted");
    }
  } catch (error) {
    console.log("=========== REMOVAL ERROR ==========");
    console.log(error);
  }
};

module.exports = { removeRoom };
