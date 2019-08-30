import React from "react";
import AppContainer from "../../containers/AppContainer/AppContainer";
import bgImage from "../../images/fog.jpg";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../../styles/utils/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <StyledWrapper>
          <AppContainer />
        </StyledWrapper>
      </>
    </ThemeProvider>
  );
};

const GlobalStyle = createGlobalStyle`
body{
  padding: 0;
  margin: 0;
  min-height: 100vh;
  font-family: 'Oswald', sans-serif;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom right;
  color: ${({ theme }) => theme.colors.mainDark};

  *,*::before, *::after{
    box-sizing: border-box;
  }

  *, *:focus{
    outline: none;
  }
}
`;

const StyledWrapper = styled.div`
  width: 95%;
  max-width: 650px;
  margin: 0 auto;
  padding: 20px 0;
`;

export default App;
