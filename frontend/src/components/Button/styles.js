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
            variant === "blue_alt" ? theme.colors.detailPrimary : "transparent"
    );
  }};
  transition: all linear .3s;
  padding: 
  ${({theme}) => theme.spacing.padding.big_small}
  ${({theme}) => theme.spacing.padding.normal};
  color: 
  ${({variant, theme}) => {
    return(
      variant === "blue_alt" ? "rgb(217, 80, 28)" :
        variant === "tab" ? theme.colors.backgroundPrimary : "#FFF"
    );
  }};
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
      variant === "tab" ? "auto" : 
        variant === "blue" ? theme.colors.blue["400"] : 
          variant === "gray" ? theme.colors.blue["100"] : 
            variant === "blue_alt" ? theme.colors.blue["100"] : "transparent"
    );
  }};

  color: 
    ${({variant, theme}) => {
    return(
      variant === "tab" ? theme.colors.sectionTitle : "auto"
    );
  }};
  }
`;