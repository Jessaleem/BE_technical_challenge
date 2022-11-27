const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/database');

const flightSchema = sequelize.define('flight', {
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
  ariline: {
    type: DataTypes.STRING,
  },
  flight_number: {
    type: DataTypes.INTEGER,
  },
  tail_number: {
    type: DataTypes.STRING,
  },
  origin_airport: {
    type: DataTypes.STRING,
  },
  destination_airport: {
    type: DataTypes.STRING,
  },
  scheduled_departure: {
    type: DataTypes.INTEGER,
  },
  departure_time: {
    type: DataTypes.DATE,
  },
  departure_delay: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  taxi_out: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  wheels_off: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  scheduled_time: {
    type: DataTypes.INTEGER,
  },
  elapsed_time: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  air_time: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  distance: {
    type: DataTypes.INTEGER,
  },
  wheels_on: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  taxi_in: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  scheduled_arrival: {
    type: DataTypes.INTEGER,
  },
  arrival_time: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  arrival_delay: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  diverted: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  cancelled: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  cancellation_reason: {
    type: DataTypes.STRING,
    defaultValue: 'A',
  },
  air_system_delay: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  security_delay: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  airline_delay: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  late_aircraft_delay: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  weather_delay: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});
