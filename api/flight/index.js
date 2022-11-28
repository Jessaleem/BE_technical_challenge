const Router = require('express');

const {
  getAllFlights,
  getSingleFlight,
  createFlight,
  updateFlight,
  deleteFlight,
} = require('./flight.controller');

const router = Router();

router.get('/', getAllFlights);
router.post('/', getSingleFlight);
router.get('/:id', createFlight);
router.patch('/:id', updateFlight);
router.delete('/:id', deleteFlight);

module.exports = router;
