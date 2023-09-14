// const sequelize = require("sequelize");
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
    // let rooms = await Room.findAll({
    //   // attributes: [
    //   //   [sequelize.fn("COUNT", sequelize.col("Players.id")), "Players"],
    //   // ],
    //   include: [
    //     {
    //       model: Player,
    //       required: false,
    //     },
    //   ],
    //   // group: ["room.id"],
    //   raw: true,
    // });
    // console.log("===");
    // console.log(rooms);
    // let roomsAvailable = rooms?.find((room) => room?.Players < 2);
    // if (roomsAvailable) throw new Error("Please choose available room");
    await Room.create();
    io.emit("createRoom", { success: true });
  } catch (error) {
    socket.emit("createRoom", { success: false, msg: error.message });
  }
};

module.exports = { createRoom };
