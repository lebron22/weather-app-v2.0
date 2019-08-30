import React, { Component } from "react";
import SearchContainer from "../SearchContainer/SearchContainer";
import API from "../../utils/helpers/API";

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
    return (
      <SearchContainer handleSearchBarSubmit={this.handleSearchBarSubmit} />
    );
  }
}

export default AppContainer;
