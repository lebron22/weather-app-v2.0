import React, { Component } from "react";
import SearchContainer from "../SearchContainer/SearchContainer";

class AppContainer extends Component {
  state = {
    searchedCity: ""
  };

  handleSearchBarSubmit = searchedCity => {
    console.log(searchedCity);
  };

  render() {
    return (
      <SearchContainer handleSearchBarSubmit={this.handleSearchBarSubmit} />
    );
  }
}

export default AppContainer;
