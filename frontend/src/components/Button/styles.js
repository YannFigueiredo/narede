import styled from "styled-components";

export const Container = styled.button`
  cursor: pointer;
  border: none;
  background: ${({theme}) => theme.colors.primary};
  transition: all linear .3s;
  padding: ${({theme}) => theme.spacing.padding.very_small};
  color: #FFF;

  &:hover {
    background: linear-gradient(to right, ${({theme}) => theme.colors.primaryGradient}, ${({theme}) => theme.colors.secondaryGradient});
  }
`;