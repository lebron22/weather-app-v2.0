import React from "react";
import ErrorCard from "../shared/ErrorCard/ErrorCard";
import LoadingSpinner from "../shared/LoadingSpinner/LoadingSpinner";
import CurrentWeather from "../CurrentWeather/CurrentWeather.js";
import ForecastResults from "../ForecastResults/ForecastResults";

import styled from "styled-components";
import { StyledButton } from "../../styles/shared/StyledButton";

const WeatherResults = ({
  currentWeather,
  forecasts,
  handleForecastToggleButton,
  changeForecastsQuantity,
  searchedCity
}) => {
  if (currentWeather.error) {
    return (
      <ErrorCard content={currentWeather.error} searchedCity={searchedCity} />
    );
  } else if (currentWeather.loading) {
    return <LoadingSpinner />;
  }

  const renderButtonContent = forecasts.showForecast
    ? "Hide forecast"
    : "Show forecast";

  return (
    <StyledWeatherResults>
      <CurrentWeather currentWeather={currentWeather} />
      <StyledButton onClick={handleForecastToggleButton}>
        {renderButtonContent}
      </StyledButton>
      {forecasts.showForecast && (
        <ForecastResults
          searchedCity={searchedCity}
          forecasts={forecasts}
          changeForecastsQuantity={changeForecastsQuantity}
        />
      )}
    </StyledWeatherResults>
  );
};

const StyledWeatherResults = styled.div`
  background-color: ${({ theme }) => theme.colors.transparentWhite};
  margin: 20px 0;
  padding: 20px 20px 10px 20px;
  border-radius: 4px;
  text-align: center;
`;

export default WeatherResults;
