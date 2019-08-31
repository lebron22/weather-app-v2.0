import React, { Component } from "react";
import SearchContainer from "../SearchContainer/SearchContainer";
import API from "../../utils/helpers/API";
import WeatherResults from "../../components/WeatherResults/WeatherResults";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";

class AppContainer extends Component {
  state = {
    searchedCity: ""
  };

  handleSearchBarSubmit = searchedCity => {
    if (searchedCity) {
      this.fetchCurrentWeather(searchedCity);
      this.setState({
        searchedCity,
        currentWeather: {
          loading: true,
          error: null
        }
      });
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
