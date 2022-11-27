const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/database');

const airlineSchema = sequelize.define('airline', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  iata_code: {
    type: DataTypes.STRING,
  },
  airline: {
    type: DataTypes.STRING,
  },
});

module.exports = airlineSchema;
