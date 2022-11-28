const Router = require('express');

const {
  getAllAirports,
  getSingleAirport,
  createAirport,
  updateAirport,
  deleteAirport,
} = require('./airport.controller');

const router = Router();

router.get('/', getAllAirports);
router.post('/', createAirport);
router.get('/:id', getSingleAirport);
router.patch('/:id', updateAirport);
router.delete('/:id', deleteAirport);

module.exports = router;
