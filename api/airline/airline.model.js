const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/database');

const Flight = require('../flight/flight.model');
// const FlightAirline = require('../flight_airline/flight_airline.model');

const AirlineSchema = sequelize.define('airline', {
  iata_code: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  airline: {
    type: DataTypes.STRING,
  },
});

AirlineSchema.hasMany(Flight);
Flight.belongsTo(AirlineSchema);

module.exports = AirlineSchema;
