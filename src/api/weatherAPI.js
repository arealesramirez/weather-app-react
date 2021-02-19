import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5/",
});

const getWeatherBasedOnLocation = (location) => {
  return apiClient
    .get(
      `/weather?q=${location}&APPID=${process.env.REACT_APP_WEATHER_APP_API}&units=imperial`
    )
    .then((res) => res.data);
};

const getForecast = (lat, lon) => {
  return apiClient
    .get(
      `/onecall?lat=${lat}&lon=${lon}&APPID=${process.env.REACT_APP_WEATHER_APP_API}&units=imperial`
    )
    .then((res) => res.data);
};

export { getWeatherBasedOnLocation, getForecast };
