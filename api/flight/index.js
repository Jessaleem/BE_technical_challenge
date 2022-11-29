const Router = require('express');

const {
  getAllFlights,
  getSingleFlight,
  createFlight,
  updateFlight,
  deleteFlight,
} = require('./flight.controller');

const router = Router();

/**
 * @openapi
 * /api/flights:
 *   get:
 *     tags:
 *       - Flight
 *     description: get all flight
 *     responses:
 *       200:
 *         description: An array of all the flight
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Flight'
 *       400:
 *         description: Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerError'
 */
router.get('/', getAllFlights);

/**
 * @openapi
 * /api/flights:
 *   post:
 *     tags:
 *       - Flight
 *     description: Create an Flight
 *     requestBody:
 *       description: Flight data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Flight'
 *     responses:
 *       201:
 *         description: Succesfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Flight'
 *       400:
 *         description: Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerError'
 */
router.post('/', getSingleFlight);

/**
 * @openapi
 * /api/flights/{id}:
 *   get:
 *     tags:
 *       - Flight
 *     description: find an Flight
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Flight id
 *         required: true
 *     responses:
 *       200:
 *         description: An Flight
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Flight'
 *       '400':
 *         description: Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerError'
 */
router.get('/:id', createFlight);

/**
 * @openapi
 * /api/flights/{id}:
 *   patch:
 *     tags:
 *       - Flight
 *     description: Update an Flight
 *     requestBody:
 *       description: Flight data
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Flight'
 *     responses:
 *       200:
 *         description: Sucessfully updated Flight
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Flight'
 *       400:
 *         description: Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerError'
 */
router.patch('/:id', updateFlight);

/**
 * @openapi
 * /api/flights/{id}:
 *   delete:
 *     tags:
 *       - Flight
 *     description: Delete an Flight
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Flight id
 *         required: true
 *     responses:
 *       200:
 *         description: Sucessfully deleted Flight
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Flight'
 *       400:
 *         description: Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerError'
 */
router.delete('/:id', deleteFlight);

module.exports = router;
