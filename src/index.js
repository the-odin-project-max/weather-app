import {process, images} from './scripts/constants.js';

// Function that hit weather API and return data
const getWeather = async (city) => {
	const apiKey = process.env.API_KEY;
	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
	const data = await response.json();
	return data;
}

const setTodayPanel = (weatherData) => {
	const weatherDiv = document.getElementById("today");
	weatherDiv.textContent = "";
	const weatherList = document.createElement("ul");
	const weatherDataList = document.createElement("li");
	weatherDataList.textContent = `City: ${weatherData.name}, Temperature: ${weatherData.main.temp}`;
	weatherList.appendChild(weatherDataList);
	weatherDiv.appendChild(weatherList);
}

// Function that display weather data
const displayWeather = async (city) => {
	const weatherData = await getWeather(city);
	setTodayPanel(weatherData);
}

// Display weather data for the first time
displayWeather("London");
