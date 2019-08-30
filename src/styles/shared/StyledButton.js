import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${({ primary }) =>
    primary
      ? ({ theme }) => theme.colors.mainGray
      : ({ theme }) => theme.colors.mainWhite};
  border: none;
  border-radius: ${({ cutLeft }) => (cutLeft ? "0 4px 4px 0" : "4px")};
  padding: 5px 10px;
  margin: ${({ noMargin }) => (noMargin ? 0 : "10px")};
  transition: background-color 0.2s ease-in-out;
  font-family: "Oswald", sans-serif;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainDark};
    color: ${({ theme }) => theme.colors.mainWhite};
  }
`;
