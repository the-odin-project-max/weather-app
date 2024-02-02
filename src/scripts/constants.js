
const process = {
	env: {
		API_KEY: "1810d5f4b037b1f6ea4692c6b589d8ba",
		API_KEY_PERSONAL: "c0062fcacffd48779fe133436240202"
	}
}

function importAll(r) {
	let images = {};
	r.keys().map((item, index) => { 
		images[item.replace('./', '').replace(/\.(.*)$/,'')] = r(item);
	});
	return images;
  }
  
const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

function urlFromIconCode(iconCode) {
	return `http://openweathermap.org/img/w/${iconCode}.png`;
}

export { process, images, urlFromIconCode };