import React from "react";
import styled from "styled-components";
import { StyledParagraph } from "../../styles/shared/typography/StyledParagraph";
import { StyledH1 } from "../../styles/shared/typography/StyledH1";
import { StyledH2 } from "../../styles/shared/typography/StyledH2";

const WelcomeCard = () => {
  return (
    <StyledWelcomeCard>
      <StyledH1>Welcome</StyledH1>
      <StyledParagraph>
        Fill the form above to check the weather
      </StyledParagraph>
      <StyledH2> We wish you sunny days!</StyledH2>
    </StyledWelcomeCard>
  );
};

const StyledWelcomeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.transparentWhite};
  padding: 20px;
  min-height: 70vh;
  border-radius: 4px;
`;

export default WelcomeCard;
