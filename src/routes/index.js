const express = require('express');
const { testEnvironmentVariable } = require('../settings');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.status(200).json({ message: testEnvironmentVariable });
});

module.exports = router;
