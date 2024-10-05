const axios = require('axios');
const config = require('../config');

const fetchConfirmedPlanets = async () => {
    try {
        const response = await axios.get(config.exoplanetAPI);
        return response.data; // Return the data directly
    } catch (error) {
        throw new Error('Error fetching confirmed planets: ' + error.message);
    }
};

module.exports = { fetchConfirmedPlanets };
