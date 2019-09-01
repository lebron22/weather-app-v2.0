import React from "react";
import styled from "styled-components";
import { StyledParagraph } from "../../styles/shared/typography/StyledParagraph";

const CurrentWeatherMainDetails = ({
  tempMin,
  tempMax,
  humidity,
  wind,
  pressure
}) => {
  return (
    <StyledCurrentWeatherMainDetails>
      <StyledParagraph withPadding>
        min. temp.: <b>{tempMin}&#176;C</b>
      </StyledParagraph>
      <StyledParagraph withPadding>
        max. temp.: <b>{tempMax}&#176;C</b>
      </StyledParagraph>
      <StyledParagraph withPadding>
        humidity: <b>{humidity}%</b>
      </StyledParagraph>
      <StyledParagraph withPadding>
        wind: <b>{wind} m/s</b>
      </StyledParagraph>
      <StyledParagraph withPadding>
        pressure: <b>{pressure} hPa</b>
      </StyledParagraph>
    </StyledCurrentWeatherMainDetails>
  );
};

const StyledCurrentWeatherMainDetails = styled.div`
  flex-basis: 100%;
  padding: 10px;
  @media (min-width: ${({ theme }) =>
      theme.mediaQueryBreakpoints.mobileMedium}) {
    flex-basis: 50%;
  }
`;

export default CurrentWeatherMainDetails;
