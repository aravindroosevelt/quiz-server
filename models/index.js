const { Room } = require("./Room");
const { Player } = require("./Player");

Room.hasMany(Player, {
  foreignKey: "roomId",
});
Player.belongsTo(Room, {
  foreignKey: "roomId",
});
