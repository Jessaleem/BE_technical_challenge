const Flight = require('./flight.model');

async function getAllFlights(_, res) {
  try {
    const flights = await Flight.findAll();
    return res.status(200).json(flights);
  } catch (error) {
    return res.status(400).json({ error });
  }
}

async function getSingleFlight(req, res) {
  const { id } = req.params;
  try {
    const flight = await Flight.findOne({ where: { id } });
    if (!flight) {
      throw new Error('Flight dont found');
    }
    return res.status(200).json(flight);
  } catch (error) {
    return res.status(400).json({ error });
  }
}

async function createFlight(req, res) {
  const flightData = req.body;
  try {
    if (!flightData) {
      throw new Error('Content can not be empty');
    }
    const flight = await Flight.create(flightData);
    return res.status(200).json(flight);
  } catch (error) {
    return res.status(400).json({ error });
  }
}

async function updateFlight(req, res) {
  const { id } = req.params;
  const fligthData = req.body;
  try {
    const flight = await Flight.update(fligthData, { where: { id } });
    return res.status(200).json(flight);
  } catch (error) {
    return res.status(400).json({ error });
  }
}

async function deleteFlight(req, res) {
  const { id } = req.params;
  try {
    const flight = await Flight.destroy({ where: { id } });
    return res.status(200).json(flight);
  } catch (error) {
    return res.status(400).json({ error });
  }
}

module.exports = {
  getAllFlights,
  getSingleFlight,
  createFlight,
  updateFlight,
  deleteFlight,
};
