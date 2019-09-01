import React from "react";
import styled from "styled-components";
import { StyledParagraph } from "../../styles/shared/typography/StyledParagraph";
import { StyledH1 } from "../../styles/shared/typography/StyledH1";

const CurrentWeatherMainGeneral = ({ city, temp, description }) => {
  return (
    <StyledCurrentWeatherMainGeneral>
      <StyledParagraph isLarge className="current-weather__info--normal">
        {city}
      </StyledParagraph>
      <StyledH1 isLarge>{temp}&#176;C</StyledH1>
      <StyledParagraph className="current-weather__info--small">
        {description}
      </StyledParagraph>
    </StyledCurrentWeatherMainGeneral>
  );
};

const StyledCurrentWeatherMainGeneral = styled.div`
  flex-basis: 100%;
  padding: 10px;
  @media (min-width: ${({ theme }) =>
      theme.mediaQueryBreakpoints.mobileMedium}) {
    flex-basis: 50%;
  }
`;

export default CurrentWeatherMainGeneral;
