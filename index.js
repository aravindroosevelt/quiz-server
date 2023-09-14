require("dotenv").config();
const { answer } = require("./actions/answer");
const { cleanup } = require("./actions/cleanup");
const { createRoom } = require("./actions/createRoom");
const { getRooms } = require("./actions/getRooms");
const { joinRoom } = require("./actions/joinRoom");
const { removeRoom } = require("./actions/removeRoom");
const { startQuiz } = require("./actions/startQuiz");
const { db } = require("./db");
require("./models/index");

const PORT = process.env.PORT || 8000;
/* listening */
const io = require("socket.io")(PORT, {
  cors: {
    origin: [process.env.ORIGIN],
  },
});

io.on("connection", (socket) => {
  socket.on("createRoom", async () => {
    createRoom(socket, io);
  });
  socket.on("getRooms", async () => {
    getRooms(socket);
  });
  socket.on("joinRoom", async (room) => {
    joinRoom(socket, io, room);
  });
  socket.on("disconnect", (reason) => {
    removeRoom(socket, io);
  });
  socket.on("startQuiz", (params) => {
    startQuiz(socket, io, params);
  });
  socket.on("removeRoom", () => {
    removeRoom(socket, io);
  });
  socket.on("answer", (params) => {
    answer(socket, io, params);
  });
});

// cleanup();

/* Database connection */
// db.sync({ alter: true })
//   .then(() => console.log(`DB connected successfully!`))
//   .catch((err) => console.log(err));
