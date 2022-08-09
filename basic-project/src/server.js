const express = require('express');
const server = express();
const app = require('./app');

server.use(express.json());
server.use(app);


server.listen(3000, () => {
  console.log("App running")
})