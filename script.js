// Sélectionnez le bouton de bascule de thème
const themeToggleBtn = document.getElementById('1');

// Fonction pour basculer entre les thèmes clair et sombre
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
}

// Écoutez les clics sur le bouton de bascule de thème
themeToggleBtn.addEventListener('click', toggleTheme);

// Détection automatique du mode sombre du système
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDarkMode) {
    document.body.classList.add('dark-theme');
}

// Fonction pour récupérer la température en temps réel pour une ville spécifique
async function getTemperature(cityName) {
    try {
        const response = await fetch(`/temperature/${cityName}`);
        const data = await response.json();

        // Mettre à jour l'affichage de la température dans la page HTML
        const temperatureElement = document.getElementById(`${cityName}-temperature`);
        temperatureElement.textContent = `${data.temperature}°C`; // Affichage en degrés Celsius
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        const temperatureElement = document.getElementById(`${cityName}-temperature`);
        temperatureElement.textContent = 'Erreur'; // Afficher une erreur si nécessaire
    }
}

// Appeler la fonction getTemperature pour chaque ville avec son nom
const cities = ['Paris', 'Moscou', 'London', 'Cairo', 'Tokyo', 'New-York', 'Delhi', 'São Paulo', 'Tehran'];
cities.forEach(city => getTemperature(city));
