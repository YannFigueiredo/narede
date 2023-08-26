import styled from "styled-components";

export const Container = styled.button`
  cursor: pointer;
  border: none;
  background: ${(props) => props.background};
  transition: all linear .3s;
  padding: ${({theme}) => theme.spacing.padding.very_small};
  color: ${(props) => props.color};
  text-transform: uppercase;
  font-weight: 700;

  &:hover {
    background: linear-gradient(
      to right, 
      ${({theme}) => theme.colors.primaryGradient}, 
      ${({theme}) => theme.colors.secondaryGradient}
    );
  }
`;