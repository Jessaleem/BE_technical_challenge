const Airport = require('./airport.model');

async function getAllAirports(_, res) {
  try {
    const airports = await Airport.findAll();
    return res.status(200).json(airports);
  } catch (error) {
    return res.status(400).json({ error });
  }
}

async function getSingleAirport(req, res) {
  const { id } = req.params;
  try {
    const airport = await Airport.findOne({ where: { iata_code_airport: id } });
    if (!airport) {
      throw new Error('Airport dont found');
    }
    return res.status(200).json(airport);
  } catch (error) {
    return res.status(400).json({ error });
  }
}

async function createAirport(req, res) {
  const airportData = req.body;
  try {
    if (!airportData) {
      throw new Error('Content can not be empty');
    }
    const airport = await Airport.create(airportData);
    return res.status(200).json(airport);
  } catch (error) {
    return res.status(400).json({ error });
  }
}

async function updateAirport(req, res) {
  const { id } = req.params;
  const airportData = req.body;
  try {
    const airport = await Airport.update(airportData, {
      where: { iata_code_airport: id },
    });
    return res.status(200).json(airport);
  } catch (error) {
    return res.status(400).json({ error });
  }
}

async function deleteAirport(req, res) {
  const { id } = req.params;
  try {
    const airport = await Airport.destroy({ where: { iata_code_airport: id } });
    return res.status(200).json(airport);
  } catch (error) {
    return res.status(400).json({ error });
  }
}

module.exports = {
  getAllAirports,
  getSingleAirport,
  createAirport,
  updateAirport,
  deleteAirport,
};
