const express = require('express');

const tasksRouter = require('./router/tasks/tasks-router');
const usersRouter = require('./router/users/users-router');

const server = express();
// const cors = require('cors');

server.use(express.json());
server.use('/tasks',tasksRouter);
server.use('/users',usersRouter);


module.exports = server;