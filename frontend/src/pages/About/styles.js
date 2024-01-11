import styled from "styled-components";

export const Main = styled.main`
  animation: rotateFromLeft .2s linear;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.padding.large};
  padding: 
  ${({theme}) => theme.spacing.padding.large}
  ${({theme}) => theme.spacing.padding.very_large};

  @media screen and (max-width: 768px) {
    padding: ${({theme}) => theme.spacing.padding.small};
  }
`;