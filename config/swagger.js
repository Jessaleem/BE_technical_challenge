const path = require('path');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const { version } = require('../package.json');

const routes = path.join(__dirname, '../api/**/index.js');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Airline',
      version,
      description:
        'API with node.js that allows you to create, update, delete and get the data about airports, airlines, and flights',
      contact: {
        name: 'Jessica Martinez',
        gitHub: 'https://github.com/Jessaleem',
        email: 'aleejess@gmail.com',
      },
      license: {
        name: 'ISC',
        url: 'https://opensource.org/licenses/ISC',
      },
    },
    servers: [
      {
        url: `http://localhost:3030`,
        description: 'local server',
      },
    ],
    components: {
      schemas: {
        ServerError: {
          type: 'object',
          properties: {
            error: {
              type: 'object',
              description: 'server crash',
              example: 'Internal server error',
            },
          },
        },
        AirlineSchema: {
          type: 'object',
          properties: {
            iata_code: {
              type: 'string',
              description: 'unique code for an airline',
              example: 'AA',
            },
            airline: {
              type: 'string',
              description: 'airline name',
              example: 'American Airlines Inc.',
            },
          },
        },
        Airport: {
          type: 'object',
          properties: {
            iata_code_airport: {
              type: 'string',
              description: 'unique code for an airport',
              example: 'ABI',
            },
            airport_name: {
              type: 'string',
              description: 'airport name',
              example: 'Abilene Regional Airport',
            },
            city: {
              type: 'string',
              description: 'city where is located the airport',
              example: 'Abilene',
            },
            state: {
              type: 'string',
              description: 'state where is located the airport',
              example: 'TX',
            },
            country: {
              type: 'string',
              description: 'country where is located the airport',
              example: 'USA',
            },
            latitude: {
              type: 'string',
              description: 'latitude of the airport',
              example: '32.41132',
            },
            longitude: {
              type: 'string',
              description: 'longitude of the airport',
              example: '-99.68190',
            },
          },
        },
        Flight: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'unique code from database',
              example: '1',
            },
            year: {
              type: 'integer',
              description: 'year of flight',
              example: '2022',
            },
            month: {
              type: 'integer',
              description: 'month of flight',
              example: '1',
            },
            day: {
              type: 'integer',
              description: 'day of flight',
              example: '1',
            },
            day_of_week: {
              type: 'integer',
              description: 'day of week of flight',
              example: '1',
            },
            flight_number: {
              type: 'integer',
              description: 'flight number',
              example: '136',
            },
            tail_number: {
              type: 'string',
              description: 'number of airplane',
              example: 'N431AS',
            },
            scheduled_departure: {
              type: 'string',
              description: 'moment that the plane pushes back from the gate',
              example: '1012',
            },
            departure_time: {
              type: 'integer',
              description: 'time of departure',
              example: '1005',
            },
            departure_delay: {
              type: 'integer',
              description: 'time flight is beyond the shedule departure time',
              example: '-7',
            },
            taxi_out: {
              type: 'integer',
              description:
                'the time spent by a flight between its actual off-block time (AOBT) and actual take-off time (ATOT)',
              example: '9',
            },
            wheel_off: {
              type: 'integer',
              description: 'time the airplaine is on flight',
              example: '1014',
            },
            scheduled_time: {
              type: 'integer',
              description: 'time of flight',
              example: '143',
            },
            elapsed_time: {
              type: 'integer',
              description:
                'The time computed from gate departure time to gate arrival time',
              example: '131',
            },
            air_time: {
              type: 'integer',
              description: 'The time the airplane is going to be on air',
              example: '118',
            },
            distance: {
              type: 'integer',
              description: 'distance between origin and destination',
              example: '909',
            },
            wheels_on: {
              type: 'integer',
              description: 'time the airplaine is on ground',
              example: '1312',
            },
            taxi_in: {
              type: 'integer',
              description:
                'the movement of an aircraft on the ground, under its own power',
              example: '4',
            },
            scheduled_arrival: {
              type: 'integer',
              description:
                'the movement of an aircraft on the ground, under its own power',
              example: '1335',
            },
            arrival_time: {
              type: 'integer',
              description: 'time of arrival',
              example: '1316',
            },
            arrival_delay: {
              type: 'integer',
              description: 'delay in arrival',
              example: '-19',
            },
            diverted: {
              type: 'integer',
              description: 'flight that has landed in another airport',
              example: '0',
            },
            cancelled: {
              type: 'integer',
              description: 'flight that was canceled',
              example: '1',
            },
            cancelation_reason: {
              type: 'string',
              description: 'reason of the cancelation',
              example: 'A',
            },
            air_system_delay: {
              type: 'integer',
              description: 'delay for extreme weather conditions',
              example: '0',
            },
            security_delay: {
              type: 'integer',
              description: 'delay for security reasons',
              example: '0',
            },
            airline_delay: {
              type: 'integer',
              description: 'delay of the flight',
              example: '0',
            },
            late_aircraft_delay: {
              type: 'integer',
              description: 'delay of the flight',
              example: '19',
            },
            weather_delay: {
              type: 'integer',
              description: 'delay for security reasons',
              example: '0',
            },
            airlineIataCode: {
              type: 'string',
              description: 'unique code for an airline',
              example: 'AA',
            },
            airport_origin_id: {
              type: 'string',
              description: 'unique code for an airport',
              example: 'ANC',
            },
            airport_destination_id: {
              type: 'string',
              description: 'unique code for an airport',
              example: 'ANC',
            },
          },
        },
      },
    },
  },
  apis: [routes],
};

const swagerSpecs = swaggerJsdoc(options);

function swaggerDocs(app, port) {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swagerSpecs));
}

module.exports = swaggerDocs;
