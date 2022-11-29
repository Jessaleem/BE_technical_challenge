const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/database');

const Flight = sequelize.define('flight', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  year: {
    type: DataTypes.INTEGER,
  },
  month: {
    type: DataTypes.INTEGER,
  },
  day: {
    type: DataTypes.INTEGER,
  },
  day_of_week: {
    type: DataTypes.INTEGER,
  },
  flight_number: {
    type: DataTypes.INTEGER,
  },
  tail_number: {
    type: DataTypes.STRING,
  },
  scheduled_departure: {
    type: DataTypes.INTEGER,
  },
  departure_time: {
    type: DataTypes.INTEGER,
  },
  departure_delay: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  taxi_out: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  wheels_off: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  scheduled_time: {
    type: DataTypes.INTEGER,
  },
  elapsed_time: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  air_time: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  distance: {
    type: DataTypes.INTEGER,
  },
  wheels_on: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  taxi_in: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  scheduled_arrival: {
    type: DataTypes.INTEGER,
  },
  arrival_time: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  arrival_delay: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  diverted: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  cancelled: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  cancellation_reason: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  air_system_delay: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  security_delay: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  airline_delay: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  late_aircraft_delay: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  weather_delay: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = Flight;
