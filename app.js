const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const rateLimiter = require("express-rate-limit");

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * Utils
 */
const AppError = require("./utils/AppError.js");

/**
 * Routes
 */
const weatherRouter = require("./router/weather.router.js");

/**
 * App middlewares
 */
app.use(cors());
app.use(morgan("dev"));

// rate limiter middleware
app.use(
	rateLimiter({
		windowMs: 600000, // 10 mins
		max: 100, // number of requests 
	})
);
app.set("trust proxy", 1);

/**
 * Routers
 */
app.use("/api/v1", weatherRouter);

/**
 * Check server running
 */
app.route("/health").get((req, res) => {
	res.status(200).send({
		message: "server running 🚀",
	});
});

/**
 * If none of the routes matches.
 */
app.all("*", (req, res, next) => {
	next(new AppError("what ya looking for 👀", 404));
});

/**
 * Default error handling middleware.
 */
app.use((err, req, res, next) => {
	const { status = 500, message = "Something went wrong", stack } = err;
	console.error(stack);
	return res.status(status).send({
		message,
	});
});

app.listen(PORT, () => {
	console.log("server is running on port ", PORT);
});
