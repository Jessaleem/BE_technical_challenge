require('dotenv').config();
const express = require('express');

require('./api/airline/airline.model.js');
require('./api/airport/airport.model.js');
require('./api/flight/flight.model');

const configExpress = require('./config/express');
const { connectDB } = require('./config/database');
const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  configExpress(app);
  await connectDB();

  console.log(`Server running on port hhttp://localhost:${PORT}`);
});
