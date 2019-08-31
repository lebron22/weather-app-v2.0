import React from "react";
import styled from "styled-components";
import sadSun from "../../../images/sadsun.png";
import { StyledParagraph } from "../../../styles/shared/typography/StyledParagraph";

const ErrorCard = ({ content, searchedCity }) => {
  const renderErrorMessage =
    content === "Error: 404"
      ? `Cannot find weather for ${searchedCity}.`
      : `Something went wrong ...  Check your internet connection or try again later...`;

  return (
    <StyledError>
      <StyledParagraph> {renderErrorMessage}</StyledParagraph>
      <img src={sadSun} alt="sad sun" />
    </StyledError>
  );
};

const StyledError = styled.div`
  padding: 10px 0;
  img {
    padding: 10px;
    width: 100px;
    height: 100px;
  }
`;

export default ErrorCard;
