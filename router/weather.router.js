/**
 * Node modules
 */
const { Router } = require("express");
const apicache = require("apicache");

/**
 * Controllers
 */
const { getWeather } = require("../controller/weather.controller.js");

const weatherRouter = Router();

// cache the response of this request for 2 minutes.
weatherRouter.route("/weather").get(apicache.middleware("2 minutes") ,getWeather);

module.exports = weatherRouter;