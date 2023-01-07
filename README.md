# API Proxy Server with Rate Limiting & Caching
### This is a API proxy server that can be used to proxy requests to an API, and add rate limiting and caching to the response.

<hr>

## Setup
1. Clone the repo
2. Run `npm install`
3. Create a env folder in the root directory
4. Create a `dev.env` file in the env folder
5. Get an API key from [Open Weather](https://openweathermap.org/api)
6. Add the following to the dev.env file
```
PORT=3000
WEATHER_API_KEY=YOUR_OPEN_WEATHER_API KEY
```
7. Run `npm run dev` to start the server

<hr>

## Endpoints
### GET /weather?city={city name}

optional query parameters:
- `city` - The name of the city to get the weather for

example: `GET /weather?city=London`


This endpoint will return the weather for the given city. The city can be passed in as a query parameter the response will be cached for 5 minutes and one can only send 100 requests under 10minutes.

<hr>