const { Question } = require("../models/Question");

const answer = async (socket, io, params) => {
  try {
    let question = await Question.findOne({
      where: {
        id: params?.quiz?.id,
      },
      raw: true,
    });
    socket.emit("answer", {
      success: true,
      isCorrect: question?.answer === params?.answer,
    });
  } catch (error) {
    socket.emit("answer", { success: false, msg: error.message });
  }
};

module.exports = { answer };
