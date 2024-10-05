const axios = require('axios');
const config = require('../config');

const fetchStars = async () => {
    try {
        const response = await axios.get(config.starsAPI);
        return response.data; 
    } catch (error) {
        throw new Error('Error fetching stars: ' + error.message);
    }
};

module.exports = { fetchStars };
