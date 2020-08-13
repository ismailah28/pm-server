const { response } = require('./response');

module.exports = (err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  const { status = 500, message } = err;

  response(res, status, false, message);
};
