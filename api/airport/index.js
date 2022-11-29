const Router = require('express');

const {
  getAllAirports,
  getSingleAirport,
  createAirport,
  updateAirport,
  deleteAirport,
} = require('./airport.controller');

const router = Router();

/**
 * @openapi
 * /api/airports:
 *   get:
 *     tags:
 *       - Airport
 *     description: get all airports
 *     responses:
 *       200:
 *         description: An array of all the airports
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Airport'
 *       400:
 *         description: Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerError'
 */
router.get('/', getAllAirports);

/**
 * @openapi
 * /api/airports:
 *   post:
 *     tags:
 *       - Airport
 *     description: Create an airport
 *     requestBody:
 *       description: Airport data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Airport'
 *     responses:
 *       201:
 *         description: Succesfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Airport'
 *       400:
 *         description: Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerError'
 */
router.post('/', createAirport);

/**
 * @openapi
 * /api/airports/{id}:
 *   get:
 *     tags:
 *       - Airport
 *     description: find an airport
 *     parameters:
 *       - name: id
 *         in: path
 *         description: airport id
 *         required: true
 *     responses:
 *       200:
 *         description: An airport
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Airport'
 *       '400':
 *         description: Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerError'
 */
router.get('/:id', getSingleAirport);

/**
 * @openapi
 * /api/airports/{id}:
 *   patch:
 *     tags:
 *       - Airport
 *     description: Update an airport
 *     requestBody:
 *       description: Airport data
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Airport'
 *     responses:
 *       200:
 *         description: Sucessfully updated airport
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Airport'
 *       400:
 *         description: Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerError'
 */
router.patch('/:id', updateAirport);

/**
 * @openapi
 * /api/airport/{id}:
 *   delete:
 *     tags:
 *       - Airport
 *     description: Delete an airport
 *     parameters:
 *       - name: id
 *         in: path
 *         description: airport id
 *         required: true
 *     responses:
 *       200:
 *         description: Sucessfully deleted airport
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Airport'
 *       400:
 *         description: Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerError'
 */
router.delete('/:id', deleteAirport);

module.exports = router;
