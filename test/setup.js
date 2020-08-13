const supertest = require('supertest');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const app = require('../src/app');

chai.use(sinonChai);

const server = supertest.agent(app);
const { expect } = chai;
const BASE_URL = '/v1';

module.exports = {
  server,
  expect,
  BASE_URL,
};
