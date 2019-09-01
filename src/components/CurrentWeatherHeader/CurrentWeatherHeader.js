import React from "react";
import styled from "styled-components";

const CurrentWeatherHeader = ({ date, icon }) => {
  return (
    <StyledCurrentWeatherHeader>
      <span>{date}</span>
      <img
        src={`https://openweathermap.org/img/w/${icon}.png`}
        alt="weather icon"
      />
    </StyledCurrentWeatherHeader>
  );
};

const StyledCurrentWeatherHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  & span {
    margin: 0;
    font-size: 1.5em;
  }

  & img {
    width: 70px;
  }
`;

export default CurrentWeatherHeader;
