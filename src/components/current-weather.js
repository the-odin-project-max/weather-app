import {images, urlFromIconCode} from "../scripts/constants.js";

function currentWeather(weatherData, weatherDiv) {
	const currentWeatherDiv = document.createElement("div");
	currentWeatherDiv.className = "current-weather";
	currentWeatherDiv.style.display = "flex";
	currentWeatherDiv.style.flexDirection = "column";
	currentWeatherDiv.style.justifyContent = "space-around";
	currentWeatherDiv.style.alignItems = "center";
	currentWeatherDiv.style.width = "100%";
	currentWeatherDiv.style.height = "100px";

	// Weather icon
	const weatherIconDiv = document.createElement("div");
	weatherIconDiv.className = "weather-icon-div";
	weatherIconDiv.style.display = "flex";
	weatherIconDiv.style.flexDirection = "column";
	weatherIconDiv.style.justifyContent = "center";
	weatherIconDiv.style.alignItems = "center";

	const weatherIcon = document.createElement("img");
	weatherIcon.className = "weather-icon";
	weatherIcon.src = urlFromIconCode(weatherData.weather[0].icon);
	weatherIcon.alt = weatherData.weather[0].description;
	weatherIconDiv.appendChild(weatherIcon);
	const weatherDescription = document.createElement("span");
	weatherDescription.textContent = weatherData.weather[0].description;
	weatherIconDiv.appendChild(weatherDescription);

	currentWeatherDiv.appendChild(weatherIconDiv);

	// Temperature
	const temperatureDiv = document.createElement("div");
	temperatureDiv.className = "temperature-div";
	temperatureDiv.style.display = "flex";
	temperatureDiv.style.flexDirection = "column";
	temperatureDiv.style.justifyContent = "center";
	temperatureDiv.style.alignItems = "center";

	const temperature = document.createElement("span");
	temperature.textContent = `Temperature: ${weatherData.main.temp}°C`;
	temperatureDiv.appendChild(temperature);


	weatherDiv.appendChild(currentWeatherDiv);
	weatherDiv.appendChild(temperatureDiv);

}

export default currentWeather;