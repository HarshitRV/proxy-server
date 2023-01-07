/**
 * Gets the coordinates of a particular location.
 */
module.exports.fetchGeolocation = async (body = { city: "varanasi,IND", limit: 1 }) => {
	try {
		const { city, limit } = body;

		const appid = process.env.WEATHER_API_KEY;
		const geocoderBaseURL = "http://api.openweathermap.org/geo/1.0/direct";

		const URL = `${geocoderBaseURL}?q=${city}&limit=${limit}&appid=${appid}`;

		const response = await fetch(URL);
		const data = await response.json();

		return data;
	} catch (err) {
		console.log(err);
		throw err;
	}
};

/**
 * Gets weather data of particular location 
 */
module.exports.fetchWeatherData = async (body = { lat: "25.3176", lon: "82.9739" }) => {
	try {
		const { lat, lon } = body;

		const weatherBaseURL = "https://api.openweathermap.org/data/2.5/weather";
		const URL = `${weatherBaseURL}?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.WEATHER_API_KEY}`;

		const response = await fetch(URL);
		const data = await response.json();

		return data;
	} catch (err) {
		throw err;
	}
};