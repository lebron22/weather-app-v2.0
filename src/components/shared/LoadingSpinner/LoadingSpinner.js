import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const LoadingSpinner = () => {
  return (
    <StyledLoadingSpinner>
      <ReactLoading type="spin" color="#354a4f" />
    </StyledLoadingSpinner>
  );
};

const StyledLoadingSpinner = styled.div`
  margin: 40px;
  display: flex;
  justify-content: center;
`;

export default LoadingSpinner;
