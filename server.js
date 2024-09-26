import dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';

dotenv.config();
const app = express();
const port = 3000;

app.use(express.static('.'));

async function getTemperature(cityName) {
    const apiKey = process.env.API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            console.error('Network error', response.statusText);
            return null;
        }
        const data = await response.json();
        if (data.main) {
            return data.main.temp;
        } else {
            console.error(data.message || 'Unknown error');
            return null;
        }
    } catch (error) {
        console.error('Error retrieving data:', error);
        return null;
    }
}

app.get('/temperature/:city', async (req, res) => {
    const cityName = req.params.city.replace('-', ' ');
    const temperature = await getTemperature(cityName);

    if (temperature !== null) {
        res.json({city: cityName, temperature: temperature});
    } else {
        res.status(500).json({error: 'Error retrieving temperature'});
    }
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
