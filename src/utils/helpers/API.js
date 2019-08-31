import { API_KEY, numberOfForecasts } from "../constants";

export default {
  getCurrentWeather: city => {
    const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    return fetch(CURRENT_WEATHER_URL)
      .then(res => {
        if (res.ok) return res;
        throw Error(res.status);
      })
      .then(res => res.json());
  },
  getForecast: city => {
    const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast/?q=${city}&units=metric&cnt=${numberOfForecasts}&appid=${API_KEY}`;
    return fetch(FORECAST_URL)
      .then(res => {
        if (res.ok) return res;
        throw Error(res.status);
      })
      .then(res => res.json());
  }
};
