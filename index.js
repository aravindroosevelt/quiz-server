require("dotenv").config();
const { cleanup } = require("./actions/cleanup");
const { createRoom } = require("./actions/createRoom");
const { getRooms } = require("./actions/getRooms");
const { joinRoom } = require("./actions/joinRoom");
const { removeRoom } = require("./actions/removeRoom");
const { db } = require("./db");
require("./models/index");

const PORT = process.env.PORT || 8000;
/* listening */
const io = require("socket.io")(PORT, {
  cors: {
    origin: ["http://localhost:3000"],
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
});

// cleanup();

/* Database connection */
db.sync()
  .then(() => console.log(`DB connected successfully!`))
  .catch((err) => console.log(err));