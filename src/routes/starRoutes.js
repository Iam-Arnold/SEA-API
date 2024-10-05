const express = require('express');
const router = express.Router();
const starController = require('../controllers/starsController'); // Ensure the path is correct

// Define the route for fetching stars
router.get('/', starController.getStars);

module.exports = router; // Export the router
