'use strict';

/** @type {import('sequelize-cli').Migration} */

const Flight = require('../api/flight/flight.model');
const dataCvs = require('../csv/flights.cvs');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Fligth', dataCvs, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('flights', dataCvs, {});
  },
};

const fs = require('fs');
const { parse } = require('@fast-csv/parse');
