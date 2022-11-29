const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/database');

const Flight = require('../flight/flight.model');

const Airport = sequelize.define('airport', {
  iata_code_airport: {
    type: DataTypes.STRING,
    primaryKey: true,
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

Airport.hasOne(Flight, {
  foreignKey: 'airport_origin_id',
});
Airport.hasOne(Flight, {
  foreignKey: 'airport_destination_id',
});
Flight.belongsTo(Airport, {
  foreignKey: 'airport_origin_id',
});
Flight.belongsTo(Airport, {
  foreignKey: 'airport_destination_id',
});

module.exports = Airport;
