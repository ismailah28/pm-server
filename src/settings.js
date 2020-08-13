require('dotenv').config();

const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;

module.exports = { testEnvironmentVariable };
