const Router = require('express');

const {
  getAllAirlines,
  getSingleAirline,
  createAirline,
  updateAirline,
  deleteAirline,
} = require('./airline.controller');

const router = Router();

router.get('/', getAllAirlines);
router.post('/', createAirline);
router.get('/:id', getSingleAirline);
router.patch('/:id', updateAirline);
router.delete('/:id', deleteAirline);

module.exports = router;
