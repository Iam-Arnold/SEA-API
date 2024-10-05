const express = require('express');
const router = express.Router();
const starController = require('../controllers/starsController'); 


router.get('/', starController.getStars);

module.exports = router; 
