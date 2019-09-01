import styled from "styled-components";

export const StyledH1 = styled.h1`
  margin: 0;
  padding: 0;
  font-size: ${({ isLarge }) => (isLarge ? "4em" : "3em")};
`;
