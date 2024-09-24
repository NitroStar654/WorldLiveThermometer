const themeToggleBtn = document.getElementById('1');

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
}

themeToggleBtn.addEventListener('click', toggleTheme);

const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDarkMode) {
    document.body.classList.add('dark-theme');
}

async function getTemperature(cityName) {
    try {
        const response = await fetch(`/temperature/${cityName}`);
        const data = await response.json();
        const temperatureElement = document.getElementById(`${cityName}-temperature`);
        temperatureElement.textContent = `${data.temperature}°C`;
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        const temperatureElement = document.getElementById(`${cityName}-temperature`);
        temperatureElement.textContent = 'Erreur';
    }
}

const cities = ['Paris', 'Moscou', 'London', 'Cairo', 'Tokyo', 'New-York', 'Delhi', 'São Paulo', 'Tehran'];
cities.forEach(city => getTemperature(city));
