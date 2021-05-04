const express = require('express');

const factsRouter = require('./router/facts/facts-router');
const usersRouter = require('./router/users/users-router');

const server = express();
// const cors = require('cors');

server.use(express.json());
server.use('/facts',factsRouter);
server.use('/users',usersRouter);


module.exports = server;