import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${({theme}) => theme.colors.primary};
  width: ${(props) => props.width};
  border-radius: ${({theme, isSearch}) => isSearch ? "20px" : theme.spacing.radius.small};
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 17.5rem;
  width: 100%;
  background: 
  ${({isSearch, theme}) => isSearch ? theme.colors.blue["400"] : "#FFF"};
`;

export const InputWrapper = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  height: 100%;
  padding: ${({theme}) => theme.spacing.padding.very_small};
  font-size: ${({theme}) => theme.fontSize.regular};
  color: ${({isSearch, theme}) => isSearch ? "#FFF" : theme.colors.blue["900"]};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({isSearch}) => isSearch ? "#FFF" : "rgba(255, 255, 255, .7)"};
    font-size: ${({theme}) => theme.fontSize.small};
  }
`;

export const SearchButton = styled.div`
  padding: 0.3125rem;
  cursor: pointer;
`;