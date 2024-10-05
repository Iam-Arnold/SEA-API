const express = require('express');
const cors = require('cors');
const planetRoutes = require('./routes/planetRoutes'); // Ensure the path is correct
const starRoutes = require('./routes/starRoutes'); // Ensure the path is correct

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/planets', planetRoutes); // Mount the planets route
app.use('/api/stars', starRoutes);     // Mount the stars route

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
