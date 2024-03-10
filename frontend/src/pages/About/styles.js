import styled from "styled-components";
import background from "assets/images/background.png";

export const Container = styled.div`
  max-width: 90rem;
  margin: auto;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};
  position: relative;
  animation: rotateFromLeft .2s linear;

  @media screen and (max-width: 768px) {
    gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  }
`;

export const Main = styled.main`
  animation: rotateFromLeft .2s linear;
  background-image: url(${background});
  background-size: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
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