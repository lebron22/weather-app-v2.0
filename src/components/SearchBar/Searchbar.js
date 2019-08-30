import React from "react";
import styled from "styled-components";
import { StyledButton } from "../../styles/shared/StyledButton";

const SearchBar = ({ inputText, handleInputChange, handleFormSubmit }) => {
  return (
    <StyledForm className="search-bar" onSubmit={handleFormSubmit}>
      <input
        className="search-bar__input"
        onChange={handleInputChange}
        value={inputText}
        type="text"
        placeholder="Write your location ..."
      />
      <StyledButton primary noMargin cutLeft type="submit">
        Search
      </StyledButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  margin-bottom: 10px;

  &:hover {
    box-shadow: 2px 3px 3px 2px ${({ theme }) => theme.colors.lightenmainDark};
  }

  input {
    flex-grow: 1;
    border: none;
    border-radius: 4px 0 0 4px;
    padding: 10px;
    color: ${({ theme }) => theme.colors.mainDark};
    background-color: ${({ theme }) => theme.colors.transparentWhite};
    font-family: "Oswald", sans-serif;

    &:focus + ${StyledButton} {
      background-color: ${({ theme }) => theme.colors.mainDark};
      color: ${({ theme }) => theme.colors.mainWhite};
    }
  }
`;

export default SearchBar;
