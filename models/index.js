const { Room } = require("./Room");
const { Player } = require("./Player");
const { Question } = require("./Question");
const { QuestionOption } = require("./QuestionOption");

Room.hasMany(Player, {
  foreignKey: "roomId",
});
Player.belongsTo(Room, {
  foreignKey: "roomId",
});

QuestionOption.belongsTo(Question, {
  foreignKey: "questionID",
});
Question.hasMany(QuestionOption, {
  foreignKey: "questionID",
});
