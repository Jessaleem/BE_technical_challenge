require('dotenv').config();
const express = require('express');

const configExpress = require('./config/express');
const connectDB = require('./config/database');
const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  configExpress(app);
  await connectDB();

  console.log(`Server running on port hhttp://localhost:${PORT}`);
});
