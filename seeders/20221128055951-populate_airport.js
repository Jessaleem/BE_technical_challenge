'use strict';

/** @type {import('sequelize-cli').Migration} */

const Airport = require('../api/airport/airport.model');
const dataCvs = require('../csv/airports.cvs');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Airport', dataCVs, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  },
};
