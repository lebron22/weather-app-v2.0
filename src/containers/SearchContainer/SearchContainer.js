import React, { Component } from "react";
import SearchBar from "../../components/SearchBar/Searchbar";

class SearchContainer extends Component {
  state = {
    inputText: ""
  };

  handleInputChange = e => {
    this.setState({ inputText: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.handleSearchBarSubmit(this.state.inputText);
    this.setState({ inputText: "" });
  };

  render() {
    return (
      <SearchBar
        inputText={this.state.inputText}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
      />
    );
  }
}

export default SearchContainer;
