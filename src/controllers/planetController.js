const planetService = require('../services/planetService');

const getConfirmedPlanets = async (req, res) => { // Include req and res
    try {
        const planets = await planetService.fetchConfirmedPlanets(); // Fetch planets
        res.status(200).json(planets); // Send the planets data as a JSON response
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message }); // Send the error message
    }
};

module.exports = { getConfirmedPlanets };
