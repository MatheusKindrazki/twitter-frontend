import socket from "socket.io-client";

const io = socket("https://mk-twitter-backend.herokuapp.com");

setTimeout(() => {
  console.log("usuário conectado", io.id);
}, 500);

export default io;
