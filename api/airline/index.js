const Router = require('express');

const {
  getAllAirlines,
  getSingleAirline,
  createAirline,
  updateAirline,
  deleteAirline,
} = require('./airline.controller');

const router = Router();

/**
 * @openapi
 * /api/airlines:
 *   get:
 *     tags:
 *       - Airline
 *     description: get all airlines
 *     responses:
 *       200:
 *         description: An array of all the airlines
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/AirlineSchema'
 *       400:
 *         description: Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerError'
 */
router.get('/', getAllAirlines);

/**
 * @openapi
 * /api/airlines:
 *   post:
 *     tags:
 *       - Airline
 *     description: Create an airline
 *     requestBody:
 *       description: Airline data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AirlineSchema'
 *     responses:
 *       201:
 *         description: Succesfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/AirlineSchema'
 *       400:
 *         description: Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerError'
 */
router.post('/', createAirline);

/**
 * @openapi
 * /api/airlines/{id}:
 *   get:
 *     tags:
 *       - Airline
 *     description: find an airline
 *     parameters:
 *       - name: id
 *         in: path
 *         description: airline id
 *         required: true
 *     responses:
 *       200:
 *         description: An airline
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/AirlineSchema'
 *       '400':
 *         description: Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerError'
 */
router.get('/:id', getSingleAirline);

/**
 * @openapi
 * /api/airlines/{id}:
 *   patch:
 *     tags:
 *       - Airline
 *     description: Update an airline
 *     requestBody:
 *       description: Airline data
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AirlineSchema'
 *     responses:
 *       200:
 *         description: Sucessfully updated airline
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/AirlineSchema'
 *       400:
 *         description: Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerError'
 */
router.patch('/:id', updateAirline);

/**
 * @openapi
 * /api/airlines/{id}:
 *   delete:
 *     tags:
 *       - Airline
 *     description: Delete an airline
 *     parameters:
 *       - name: id
 *         in: path
 *         description: airline id
 *         required: true
 *     responses:
 *       200:
 *         description: Sucessfully deleted airline
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/AirlineSchema'
 *       400:
 *         description: Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerError'
 */
router.delete('/:id', deleteAirline);

module.exports = router;
