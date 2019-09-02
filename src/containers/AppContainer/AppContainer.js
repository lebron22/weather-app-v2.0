import React, { Component } from "react";
import SearchContainer from "../SearchContainer/SearchContainer";
import API from "../../utils/helpers/API";
import WeatherResults from "../../components/WeatherResults/WeatherResults";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";
import { baseForecastsSet } from "../../utils/constants";
import { getLocalDate } from "../../utils/helpers/getLocalDate";

class AppContainer extends Component {
  state = {
    searchedCity: "",
    currentWeather: {
      loading: true,
      error: null
    },
    forecasts: {
      forecastsQuantity: baseForecastsSet,
      loading: true,
      error: null
    }
  };

  handleSearchBarSubmit = searchedCity => {
    if (searchedCity) {
      this.fetchCurrentWeather(searchedCity);
      this.setState(prevState => ({
        searchedCity,
        currentWeather: {
          loading: true,
          error: null
        },
        forecasts: {
          ...prevState.forecasts,
          forecastsArray: [],
          showForecast: false,
          loading: true,
          error: null
        }
      }));
    } else return;
  };

  fetchCurrentWeather = city => {
    API.getCurrentWeather(city)
      .then(({ main, wind, weather, name }) => {
        const currentWeather = {
          date: new Date().toLocaleString(),
          temp: main.temp.toFixed(),
          tempMin: main.temp_min.toFixed(),
          tempMax: main.temp_max.toFixed(),
          pressure: main.pressure,
          humidity: main.humidity,
          wind: wind.speed,
          description: weather[0].description,
          icon: weather[0].icon,
          city: name,
          error: false,
          loading: false
        };
        this.setState({ currentWeather });
      })
      .catch(err => {
        this.setState(prevState => ({
          currentWeather: {
            ...prevState.currentWeather,
            error: err.toString()
          }
        }));
      });
  };

  fetchForecasts = city => {
    API.getForecast(city)
      .then(({ list }) => {
        const forecastsArray = list.map(({ dt, main, weather }) => ({
          weekday: getLocalDate(dt, { weekday: "short" }),
          hour: getLocalDate(dt, {
            hour: "numeric",
            minute: "numeric"
          }),
          temp: main.temp,
          icon: weather[0].icon
        }));
        this.setState({
          forecasts: {
            forecastsArray,
            showForecast: true,
            forecastsQuantity: baseForecastsSet,
            error: false,
            loading: false
          }
        });
      })
      .catch(err => {
        this.setState(prevState => ({
          forecasts: {
            ...prevState.forecasts,
            error: err.toString()
          }
        }));
      });
  };

  handleForecastToggleButton = () => {
    if (!this.state.forecasts.forecastsArray.length) {
      this.fetchForecasts(this.state.searchedCity);
    }
    this.setState(prevState => ({
      forecasts: {
        ...prevState.forecasts,
        showForecast: !prevState.forecasts.showForecast
      }
    }));
  };

  changeForecastsQuantity = id => {
    if (id === "subtract") {
      this.setState(prevState => ({
        forecasts: {
          ...prevState.forecasts,
          forecastsQuantity:
            prevState.forecasts.forecastsQuantity - baseForecastsSet
        }
      }));
    } else if (id === "add") {
      this.setState(prevState => ({
        forecasts: {
          ...prevState.forecasts,
          forecastsQuantity:
            prevState.forecasts.forecastsQuantity + baseForecastsSet
        }
      }));
    } else return;
  };

  render() {
    const { currentWeather, forecasts, searchedCity } = this.state;

    const renderAppContent = searchedCity ? (
      <WeatherResults
        searchedCity={searchedCity}
        currentWeather={currentWeather}
        forecasts={forecasts}
        handleForecastToggleButton={this.handleForecastToggleButton}
        changeForecastsQuantity={this.changeForecastsQuantity}
      />
    ) : (
      <WelcomeCard />
    );

    return (
      <>
        <SearchContainer handleSearchBarSubmit={this.handleSearchBarSubmit} />
        {renderAppContent}
      </>
    );
  }
}

export default AppContainer;
