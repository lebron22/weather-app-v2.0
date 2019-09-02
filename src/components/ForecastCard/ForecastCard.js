import React from "react";
import styled from "styled-components";
import { StyledParagraph } from "../../styles/shared/typography/StyledParagraph";

const ForecastCard = props => {
  const { hour, weekday, icon, temp } = props.forecastItem;

  return (
    <StyledForecastCard>
      <StyledParagraph>{weekday}</StyledParagraph>
      <StyledParagraph>{hour}</StyledParagraph>
      <img
        src={`https://openweathermap.org/img/w/${icon}.png`}
        alt="weather icon"
      />
      <StyledParagraph>{temp.toFixed(1)}&#176;C</StyledParagraph>
    </StyledForecastCard>
  );
};

const StyledForecastCard = styled.div`
  background-color: ${({ theme }) => theme.colors.transparentWhite};
  padding: 5px;
  border-radius: 4px;
  margin: 2px;
  animation: ${({ theme }) => theme.animations.appear} 0.3s 0s both;
`;

export default ForecastCard;
