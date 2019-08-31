import styled from "styled-components";

export const StyledParagraph = styled.p`
  margin: 0;
  padding: ${({ withPadding }) => (withPadding ? "5px" : "0")};
  font-size: ${({ isLarge }) => (isLarge ? "2.3em" : "1em")};
`;
