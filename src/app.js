const createError = require('http-errors');
const express = require('express');

const errorHandler = require('./utils/error-handler');
const setupMiddlewares = require('./config/middlewares');
const indexRouter = require('./routes');

const app = express();

setupMiddlewares(app);

// setup routes
app.use('/v1', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404, 'Endpoint not found'));
});

// central error handler
app.use(errorHandler);

module.exports = app;
