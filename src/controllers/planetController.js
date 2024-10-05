const planetService = require('../services/planetService');

const getConfirmedPlanets = async (req, res) => {
    try {
        const planets = await planetService.fetchConfirmedPlanets(); 
        res.status(200).json(planets); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message }); 
    }
};

module.exports = { getConfirmedPlanets };
