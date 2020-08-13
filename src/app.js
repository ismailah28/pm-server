const createError = require('http-errors');
const express = require('express');

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
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  const { status = 500, message } = err;

  res.status(status).json({
    success: false,
    message,
  });
});

module.exports = app;
