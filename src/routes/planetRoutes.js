const express = require('express');
const router = express.Router();
const planetController = require('../controllers/planetController'); // Ensure the path is correct

// Define the route for fetching confirmed planets
router.get('/', planetController.getConfirmedPlanets);

module.exports = router; // Export the router
