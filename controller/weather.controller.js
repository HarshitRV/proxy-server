/**
 * Utils
 */
const handleAsync = require("../utils/handleAsync.js");
const {
	fetchGeolocation,
	fetchWeatherData,
} = require("../utils/weather/fetchWeather.js");

/**
 * Get current weather
 */
module.exports.getWeather = handleAsync(async (req, res) => {
	const { city = "varanasi, IND", limit = 1 } = req.query;

	const [{ lat, lon }] = await fetchGeolocation({ city, limit });
	const data = await fetchWeatherData({ lat, lon });

	const tldr = {
		city,
		min: data.main.temp_min,
		max: data.main.temp_max,
	};

	return res.status(200).send({
		message: "success",
		data,
		tldr,
	});
});
