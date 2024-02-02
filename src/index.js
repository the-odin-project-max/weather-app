import {process} from './scripts/constants.js';

import sunHours from './components/sun-hours.js';
import currentWeather from './components/current-weather.js';
import forecastWeather from './components/forecast.js';

import "./css/style.css";
import "./css/loader.css";

const API_KEY = process.env.API_KEY;
const API_KEY_PERSONAL = process.env.API_KEY_PERSONAL;

// Function that hit weather API and return data
const getCurrentWeather = async (city) => {
	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
	const data = await response.json();

	if(data.cod === "404") {
		return getCurrentWeather("Paris");
	}
	// wait 5 seconds
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return data;
}

const getForecastWeather = async (city) => {
	const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?q=${city}&days=7&key=${API_KEY_PERSONAL}`);
	const data = await response.json();

	if(data.error) {
		return getForecastWeather("Paris");
	}
	// wait 1 seconds
	// await new Promise((resolve) => setTimeout(resolve, 3000));
	return data;
}

const setForecastPanel = async (city) => {
	const forecastDiv = document.getElementById("forecast");
	while (forecastDiv.firstChild) {
		forecastDiv.removeChild(forecastDiv.firstChild);
	}
	// create loader
	const loader = document.createElement("span");
	loader.className = "loader";
	forecastDiv.appendChild(loader);
	const forecastWeatherData = await getForecastWeather(city);
	console.log(forecastWeatherData);

	forecastDiv.removeChild(loader);
	forecastWeather(forecastWeatherData.forecast.forecastday, forecastDiv, forecastWeatherData.location);
}

const setTodayPanel = async (city) => {
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
	const cityTitle = document.getElementById("city-title");
	cityTitle.textContent = `${currentWeatherData.name} - ${regionNamesInEnglish.of(currentWeatherData.sys.country)}`;
	cityTitle.style.textAlign = "center";

	// Today's weather title
	const title = document.createElement("h3");
	title.textContent = "Current Weather (Today)";
	todayDiv.appendChild(title);

	sunHours(currentWeatherData, todayDiv);
	currentWeather(currentWeatherData, todayDiv);
}

// Function that display weather data
const displayWeather = async (city) => {
	setTodayPanel(city);
	setForecastPanel(city);
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

