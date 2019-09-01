import React from "react";
import CurrentWeatherHeader from "../CurrentWeatherHeader/CurrentWeatherHeader";
import CurrentWeatherMain from "../CurrentWeatherMain/CurrentWeatherMain";
import CurrentWeatherMainGeneral from "../CurrentWeatherMainGeneral/CurrentWeatherMainGeneral";
import CurrentWeatherMainDetails from "../CurrentWeatherMainDetails/CurrentWeatherMainDetails.";

import styled from "styled-components";

const CurrentWeather = ({ currentWeather }) => {
  const {
    date,
    icon,
    city,
    temp,
    description,
    tempMin,
    tempMax,
    pressure,
    humidity,
    wind
  } = currentWeather;

  return (
    <StyledCurrentWeather>
      <CurrentWeatherHeader date={date} icon={icon} />
      <CurrentWeatherMain>
        <CurrentWeatherMainGeneral
          city={city}
          temp={temp}
          description={description}
        />
        <CurrentWeatherMainDetails
          tempMin={tempMin}
          tempMax={tempMax}
          pressure={pressure}
          humidity={humidity}
          wind={wind}
        />
      </CurrentWeatherMain>
    </StyledCurrentWeather>
  );
};

const StyledCurrentWeather = styled.div`
  text-align: center;
  animation: ${({ theme }) => theme.animations.appear} 0.3s both;
`;

export default CurrentWeather;
