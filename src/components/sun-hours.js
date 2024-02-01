import {images} from "../scripts/constants.js";

function sunHours(weatherData, weatherDiv) {
	const sunHoursDiv = document.createElement("div");
	sunHoursDiv.className = "sun-hours";
	sunHoursDiv.style.display = "flex";
	sunHoursDiv.style.justifyContent = "space-around";
	sunHoursDiv.style.alignItems = "center";
	sunHoursDiv.style.width = "100%";
	sunHoursDiv.style.height = "100px";
	

	// Sunrise time
	const sunriseBox = document.createElement("div");
	sunriseBox.className = "sunrise-box";
	sunriseBox.style.display = "flex";
	sunriseBox.style.flexDirection = "column";
	sunriseBox.style.justifyContent = "center";
	sunriseBox.style.alignItems = "center";

	const sunriseImg = document.createElement("img");
	sunriseImg.className = "sunrise-icon";
	sunriseImg.src = images.sunrise;
	sunriseImg.alt = "Sunrise";
	sunriseImg.title = "Sunrise";
	sunriseImg.style.width = "50px";
	sunriseImg.style.height = "50px";
	sunriseBox.appendChild(sunriseImg);

	const sunriseTime = document.createElement("span");
	sunriseTime.textContent = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString();
	sunriseBox.appendChild(sunriseTime);

	sunHoursDiv.appendChild(sunriseBox);

	// Sunrise time
	const sunsetBox = document.createElement("div");
	sunsetBox.className = "sunset-box";
	sunsetBox.style.display = "flex";
	sunsetBox.style.flexDirection = "column";
	sunsetBox.style.justifyContent = "center";
	sunsetBox.style.alignItems = "center";

	const sunsetImg = document.createElement("img");
	sunsetImg.className = "sunset-icon";
	sunsetImg.src = images.sunset;
	sunsetImg.alt = "sunset";
	sunsetImg.title = "sunset";
	sunsetImg.style.width = "50px";
	sunsetImg.style.height = "50px";
	sunsetBox.appendChild(sunsetImg);

	const sunsetTime = document.createElement("span");
	sunsetTime.textContent = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString();
	sunsetBox.appendChild(sunsetTime);

	sunHoursDiv.appendChild(sunsetBox);

	weatherDiv.appendChild(sunHoursDiv);


}

export default sunHours;