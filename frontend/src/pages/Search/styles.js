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
  background-color: ${({theme}) => theme.colors.backgroundLightBlue};
  padding: 0 ${({theme}) => theme.spacing.padding.normal} 0;
  
  @media screen and (max-width: 768px) {
    gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  }
`;

export const Main = styled.main`
  padding: 
  ${({theme}) => theme.spacing.padding.normal}
  ${({theme}) => theme.spacing.padding.large};
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};
  animation: rotateFromLeft .2s linear;
  background-image: url(${background});
  background-size: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  border: 2px solid ${({theme}) => theme.colors.backgroundPrimary};

  @media screen and (max-width: 600px) {
    padding: ${({theme}) => theme.spacing.padding.small}
  }
`;

export const Content = styled.div`
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
  padding: 
  ${({theme}) => theme.spacing.padding.normal}
  ${({theme}) => theme.spacing.padding.large};
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};
  border-radius: ${({theme}) => theme.spacing.radius.small};
  border: 2px solid #fff; 
  max-width: 100%;

  @media screen and (max-width: 600px) {
    padding: ${({theme}) => theme.spacing.padding.small};
  }
`;

export const ComicsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;