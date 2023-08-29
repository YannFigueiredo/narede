import styled from "styled-components";

export const Container = styled.button`
  cursor: pointer;
  border: none;
  background: 
  ${({variant, theme}) => {
    return(
      variant === "tab" ? "#FFF" : 
        variant === "blue" ? theme.colors.blue["100"] : 
          variant === "gray" ? theme.colors.gray["100"] : 
            variant === "blue_alt" ? theme.colors.blue["300"] : "transparent"
    );
  }};
  transition: all linear .3s;
  padding: ${({theme}) => theme.spacing.padding.very_small};
  color: ${({theme}) => theme.colors.blue["900"]};
  text-transform: ${({variant, isUppercase}) => variant === "tab" || isUppercase ? "uppercase" : "normal"};
  font-weight: 700;
  width: ${(props) => props.width};
  border-radius: ${({variant}) => variant === "tab" ? "0" : "3.125rem"};
  font-size: ${({variant, theme}) => variant === "tab" ? theme.fontSize.regular : theme.fontSize.base};
  font-size: 
    ${({variant, theme, isUppercase}) => {
    return(
      variant === "tab" ? theme.fontSize.regular : 
        isUppercase ? theme.fontSize.small : theme.fontSize.base
    );
  }};

  &:hover {
    background: 
    ${({variant, theme}) => {
    return(
      variant === "tab" ? theme.colors.blue["100"] : 
        variant === "blue" ? theme.colors.blue["300"] : 
          variant === "gray" ? theme.colors.blue["100"] : 
            variant === "blue_alt" ? theme.colors.blue["100"] : "transparent"
    );
  }};
`;