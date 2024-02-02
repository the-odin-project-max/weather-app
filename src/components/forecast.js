function timestampToDayOfWeek(timestamp) {
	const date = new Date(timestamp * 1000);
	const options = { weekday: 'long' };
	return new Intl.DateTimeFormat('en-US', options).format(date);
}

function forecastWeather(forecastData, forecastDiv, location) {
	console.log(forecastData);
	forecastDiv.style.display = "flex";
	forecastDiv.style.flexDirection = "column";
	forecastDiv.style.justifyContent = "flex-start";
	forecastDiv.style.alignItems = "center";

	const title = document.createElement("h3");
	title.textContent = `Forecast Weather - ${location.name} (${location.country})`;
	title.style.textAlign = "center";
	forecastDiv.appendChild(title);

	forecastData.forEach(day => {
		let dayDiv = document.createElement("div");
		dayDiv.className = "forecast-day";
		dayDiv.style.display = "flex";
		dayDiv.style.flexDirection = "row";
		dayDiv.style.justifyContent = "space-around";
		dayDiv.style.alignItems = "center";
		dayDiv.style.width = "100%";

		// Day of the week
		let dayOfWeek = document.createElement("span");
		dayOfWeek.textContent = timestampToDayOfWeek(day.date_epoch);

		// Weather icon
		let weatherIconDiv = document.createElement("img");
		weatherIconDiv.src = day.day.condition.icon.replace("//", "http://");
		weatherIconDiv.alt = day.day.condition.text;

		dayDiv.appendChild(dayOfWeek);
		dayDiv.appendChild(weatherIconDiv);

		forecastDiv.appendChild(dayDiv);
	});
	
}

export default forecastWeather;