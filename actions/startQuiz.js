const { Op } = require("sequelize");
const { Question } = require("../models/Question");
const { QuestionOption } = require("../models/QuestionOption");

const startQuiz = async (socket, io, params) => {
  try {
    let where = {
      id: { [Op.notIn]: params?.prevQIDs },
    };
    if (params?.qNo === 0) {
      id = Math.floor(Math.random() * (5 - 1) + 1);
      where = { id };
    }
    let question = await Question.findOne({
      attributes: ["question", "id"],
      include: [QuestionOption],
      where,
    });
    socket.emit("startQuiz", {
      success: true,
      question: question,
    });
  } catch (error) {
    socket.emit("startQuiz", { success: false, msg: error.message });
  }
};

module.exports = { startQuiz };
