const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API Endpoint
app.get('/api/exoplanets', async (req, res) => {
    try {
        const response = await axios.get('https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name,pl_bmassj,pl_bmassj_reflink,pl_orbsmax,pl_orbsmax_reflink,sy_snum%20+from+pscomppars+where+sy_snum+%3E+1+and+pl_bmassj+%3C=+13+order+by+pl_bmassj+desc&format=json');
        
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching exoplanets:', error);
        res.status(500).json({ message: 'Error fetching exoplanets data', error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
