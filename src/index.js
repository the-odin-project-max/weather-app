import {process, urlFromIconCode} from './scripts/constants.js';

import sunHours from './components/sun-hours.js';
import currentWeather from './components/current-weather.js';


import "./css/style.css";
import "./css/loader.css";

const API_KEY = process.env.API_KEY;

// Function that hit weather API and return data
const getCurrentWeather = async (city) => {
	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
	const data = await response.json();

	if(data.cod === 404) {
		// throw new Error(data.message);
		alert(data.message);
		return getCurrentWeather("Paris");
	}
	// wait 5 seconds
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return data;
}

const setTodayPanel = async (city) => {
	const weatherDiv = document.getElementById("today");
	
	// Clear weatherDiv
	while (weatherDiv.firstChild) {
		weatherDiv.removeChild(weatherDiv.firstChild);
	}

	// create loader
	const loader = document.createElement("span");
	loader.className = "loader";

	// set temp width and height for weatherDiv
	weatherDiv.style.width = "100%";
	weatherDiv.style.height = "100%";

	weatherDiv.appendChild(loader);

	const currentWeatherData = await getCurrentWeather(city);

	// Remove loader
	weatherDiv.removeChild(loader);


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

const searchButton = document.getElementById("city-query-button");
const searchInput = document.getElementById("city-query-input");

searchButton.addEventListener("click", () => {
	if(searchInput.value !== "") {
		displayWeather(searchInput.value);
	} else {
		displayWeather("Paris");
	}
});

searchInput.addEventListener("keyup", (event) => {
	if(event.key === "Enter") {
		if(searchInput.value !== "") {
			displayWeather(searchInput.value);
		} else {
			displayWeather("Paris");
		}
	}
});

displayWeather("Paris");

