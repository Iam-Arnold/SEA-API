const starService = require('../services/starService');

const getStars = async (req, res) => {
    try {
        const stars = await starService.fetchStars();
        res.status(200).json(stars); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getStars };
