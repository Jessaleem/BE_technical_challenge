const AirlineSchema = require('./airline.model');

async function getAllAirlines(_, res) {
  try {
    const airlines = await AirlineSchema.findAll();
    return res.status(200).json(airlines);
  } catch (error) {
    return res.status(400).json({ error });
  }
}

async function getSingleAirline(req, res) {
  const { id } = req.params;
  try {
    const airline = await AirlineSchema.findOne({ where: { iata_code: id } });
    if (!airline) {
      throw new Error('Airline dont found');
    }
    return res.status(200).json(airline);
  } catch (error) {
    return res.status(400).json({ error });
  }
}

async function createAirline(req, res) {
  const airlineData = req.body;
  try {
    if (!airlineData) {
      throw new Error('Content can not be empty');
    }
    const airline = await AirlineSchema.create(airlineData);
    return res.status(201).son(airline);
  } catch (error) {
    return res.status(400).json({ error });
  }
}

async function updateAirline(req, res) {
  const { id } = req.params;
  const airlineData = req.body;
  try {
    const airline = await AirlineSchema.update(airlineData, {
      where: { iata_code: id },
    });
    return res.status(200).json(airline);
  } catch (error) {
    return res.status(400).json({ error });
  }
}

async function deleteAirline(req, res) {
  const { id } = req.params;
  try {
    const airline = await AirlineSchema.destroy({
      where: { iata_code: id },
    });
    return res.json(airline);
  } catch (error) {
    return res.status(400).json({ error });
  }
}

module.exports = {
  getAllAirlines,
  getSingleAirline,
  createAirline,
  updateAirline,
  deleteAirline,
};
