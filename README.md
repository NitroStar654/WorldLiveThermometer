# World Live Thermometer

Welcome to the World Live Thermometer project! This repository contains scripts for retrieving and displaying real-time
weather information from various cities using the OpenWeather API.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
    - [Starting the Server](#starting-the-server)
    - [Accessing the Application](#accessing-the-application)
- [License](#license)

## Overview

World Live Thermometer provides a web application that allows users to view the current temperature of various cities
around the world. The application fetches weather data from the OpenWeather API and displays it in a user-friendly
format.

This project is a great way to learn about web development, API integration, and real-time data fetching.

## Installation

Make sure you have Node.js and npm installed on your machine. You can download them
from [Node.js official site](https://nodejs.org/fr/download/package-manager) (npm is included in Node.js).

### Clone the Repository

```
git clone https://github.com/NitroStar654/WorldLiveThermometer.git
cd WorldLiveThermometer
```

### Install Dependencies

Run the following command to install the required dependencies:

```
npm install
```

### Environment Variables

Create a ```.env``` file in the root directory of the project and add your [OpenWeather](https://openweathermap.org/api)
API key:

```
API_KEY=your_openweather_api_key
```

## Usage

### Starting the Server

To start the server, run the following command:

```
node server.js
```

The server will listen on port 3000 by default.

### Accessing the Application

Open your web browser and navigate to:

```
http://localhost:3000
```

You will see the World Live Thermometer interface displaying the current temperatures for various cities.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

We hope you find World Live Thermometer useful for your learning and development projects! If you have any questions or
encounter any issues, feel free to open an issue on GitHub.

---
