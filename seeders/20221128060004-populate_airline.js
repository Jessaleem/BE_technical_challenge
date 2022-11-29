'use strict';

/** @type {import('sequelize-cli').Migration} */

const Airline = require('../api/airline/airline.model');
const dataCvs = require('../csv/airlines.cvs');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Airlines', dataCvs, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  },
};
