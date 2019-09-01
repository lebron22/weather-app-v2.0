import React from "react";
import styled from "styled-components";

const CurrentWeatherMain = ({ children }) => {
  return <StyledCurrentWeatherMain>{children}</StyledCurrentWeatherMain>;
};

const StyledCurrentWeatherMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`;

export default CurrentWeatherMain;
