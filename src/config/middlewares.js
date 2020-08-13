const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');

module.exports = (app) => {
  app.use(logger('dev'));
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};
