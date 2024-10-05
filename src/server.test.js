const request = require('supertest');
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/exoplanets', async (req, res) => {
    // Mocked response!
    const mockResponse = [{ pl_name: 'Kepler-22b', pl_bmassj: 2.4 }];
    res.status(200).json(mockResponse);
});

describe('GET /api/exoplanets', () => {
    it('should return a list of exoplanets', async () => {
        const response = await request(app).get('/api/exoplanets');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([{ pl_name: 'Kepler-22b', pl_bmassj: 2.4 }]);
    });
});
