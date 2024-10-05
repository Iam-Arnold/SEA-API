const express = require('express');
const cors = require('cors');
const planetRoutes = require('./routes/planetRoutes'); 
const starRoutes = require('./routes/starRoutes'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/planets', planetRoutes); 
app.use('/api/stars', starRoutes);     

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
