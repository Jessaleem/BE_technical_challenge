const airline = require('./api/airline/index');
const airport = require('./api/airport/index');
const flight = require('./api/flight/index');

function routes(app) {
  app.use('/api/airlines', airline);
  app.use('/api/airports', airport);
  app.use('/api/flights', flight);
}

module.exports = routes;
