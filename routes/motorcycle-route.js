const express = require('express');
const router = express.Router(); // Creating a router instance

const motorcycleController = require('../controllers/motorcycle-controller');

// Define routes using the router instance
router.post('/motorcycle', motorcycleController.createMotorcycle); // Create a new motorcycle
router.get('/motorcycle', motorcycleController.getAllMotorcycles); // Get all motorcycles
router.get('/motorcycle/:id', motorcycleController.getMotorcycleById); // Get a motorcycle by ID
router.put('/motorcycle/:id', motorcycleController.updateMotorcycleById); // Update a motorcycle by ID
router.delete('/motorcycle/:id', motorcycleController.deleteMotorcycleById); // Delete a motorcycle by ID

module.exports = router;
