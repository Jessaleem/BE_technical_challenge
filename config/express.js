const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

function configExpress(app) {
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(cors());
}

module.exports = configExpress;
