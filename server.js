import dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';

dotenv.config(); // Charge les variables d'environnement
const app = express(); // Crée une instance de l'application Express
const port = 3000; // Définit le port d'écoute

// Middleware pour servir les fichiers statiques
app.use(express.static('.')); // Cela sert index.html et d'autres fichiers dans le dossier courant

// Fonction pour récupérer la température d'une ville
async function getTemperature(cityName) {
    const apiKey = process.env.API_KEY; // Récupère la clé API depuis les variables d'environnement
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            console.error('Erreur de réseau', response.statusText);
            return null; // Retourne null en cas d'erreur réseau
        }
        const data = await response.json();
        if (data.main) {
            return data.main.temp; // Retourne la température
        } else {
            console.error(data.message || 'Erreur inconnue');
            return null; // Retourne null si les données sont incorrectes
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        return null; // Retourne null en cas d'erreur dans la requête
    }
}

// Route pour obtenir la température d'une ville
app.get('/temperature/:city', async (req, res) => {
    const cityName = req.params.city.replace('-', ' '); // Remplace les tirets par des espaces
    const temperature = await getTemperature(cityName); // Récupère la température pour la ville donnée

    if (temperature !== null) {
        res.json({ city: cityName, temperature: temperature }); // Renvoie la température en JSON
    } else {
        res.status(500).json({ error: 'Erreur lors de la récupération de la température' }); // Gère les erreurs
    }
});

// Démarre le serveur
app.listen(port, () => {
    console.log(`Serveur écoutant sur http://localhost:${port}`); // Affiche un message lorsque le serveur est en marche
});
