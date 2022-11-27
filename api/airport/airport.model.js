const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/database');

const airportSchema = sequelize.define('airport', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  airport_name: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
  },
  latitude: {
    type: DataTypes.DECIMAL,
  },
  longitude: {
    type: DataTypes.DECIMAL,
  },
});

module.exports = airportSchema;
