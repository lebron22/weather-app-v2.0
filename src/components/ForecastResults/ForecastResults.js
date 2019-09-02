import React from "react";
import ErrorCard from "../shared/ErrorCard/ErrorCard";
import LoadingSpinner from "../shared/LoadingSpinner/LoadingSpinner";
import ForecastCard from "../ForecastCard/ForecastCard";
import { baseForecastsSet, numberOfForecasts } from "../../utils/constants";

import styled from "styled-components";
import { StyledButton } from "../../styles/shared/StyledButton";

const ForecastResults = ({
  forecasts,
  searchedCity,
  changeForecastsQuantity
}) => {
  const { error, loading, forecastsArray, forecastsQuantity } = forecasts;

  if (error) {
    return <ErrorCard content={error} searchedCity={searchedCity} />;
  } else if (loading) {
    return <LoadingSpinner />;
  }
  const forecastList = forecastsArray
    .slice(0, forecastsQuantity)
    .map((item, index) => {
      return <ForecastCard key={index} forecastItem={item} />;
    });
  return (
    <StyledForecastResults>
      <StyledForecastList>{forecastList}</StyledForecastList>
      <StyledButton
        disabled={forecastsQuantity <= baseForecastsSet}
        id="subtract"
        onClick={e => changeForecastsQuantity(e.target.id)}
      >
        Show less
      </StyledButton>
      <StyledButton
        disabled={forecastsQuantity >= numberOfForecasts}
        id="add"
        onClick={e => changeForecastsQuantity(e.target.id)}
      >
        Show more
      </StyledButton>
    </StyledForecastResults>
  );
};

const StyledForecastResults = styled.div`
  padding: 2px 0;
`;
const StyledForecastList = styled.div`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export default ForecastResults;
