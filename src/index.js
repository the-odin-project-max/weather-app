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
	const contentDiv = document.getElementById("content");
	const todayDiv = document.getElementById("today");
	
	// Clear todayDiv
	while (todayDiv.firstChild) {
		todayDiv.removeChild(todayDiv.firstChild);
	}

	// create loader
	const loader = document.createElement("span");
	loader.className = "loader";
	todayDiv.appendChild(loader);

	const currentWeatherData = await getCurrentWeather(city);
	console.log(currentWeatherData);
	const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });

	// Remove loader
	todayDiv.removeChild(loader);
	// Display City as Title
	const cityTitle = document.createElement("h2");
	contentDiv.removeChild(contentDiv.childNodes[2]);
	cityTitle.textContent = `${currentWeatherData.name} - ${regionNamesInEnglish.of(currentWeatherData.sys.country)}`;
	cityTitle.style.textAlign = "center";
	contentDiv.insertBefore(cityTitle, contentDiv.childNodes[2]);

	// Title
	const title = document.createElement("h3");
	title.textContent = "Current Weather (Today)";
	todayDiv.appendChild(title);

	sunHours(currentWeatherData, todayDiv);
	currentWeather(currentWeatherData, todayDiv);

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

