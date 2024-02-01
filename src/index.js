import {process, urlFromIconCode} from './scripts/constants.js';

import sunHours from './components/sun-hours.js';
import currentWeather from './components/current-weather.js';


import "./css/style.css";
const API_KEY = process.env.API_KEY;

// Function that hit weather API and return data
const getCurrentWeather = async (city) => {
	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
	const data = await response.json();
	return data;
}

const setTodayPanel = async (city) => {
	const currentWeatherData = await getCurrentWeather(city);
	console.log(currentWeatherData);
	const weatherDiv = document.getElementById("today");

	// Clear weatherDiv
	while (weatherDiv.firstChild) {
		weatherDiv.removeChild(weatherDiv.firstChild);
	}

	// Display City as Title
	const cityTitle = document.createElement("h2");
	cityTitle.textContent = currentWeatherData.name;
	cityTitle.style.textAlign = "center";

	weatherDiv.appendChild(cityTitle);

	sunHours(currentWeatherData, weatherDiv);
	currentWeather(currentWeatherData, weatherDiv);

}

// Function that display weather data
const displayWeather = async (city) => {
	setTodayPanel(city);
}

// Display weather data for the first time
displayWeather("Paris");
