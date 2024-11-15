import styled from "styled-components";

export const Container = styled.div`
  max-width: 90rem;
  margin: auto;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  padding: 0 ${({theme}) => theme.spacing.padding.large};
  background: rgb(217, 80, 28); 
  animation: rotateFromLeft .2s linear;

  @media screen and (max-width: 768px) {
    padding: ${({theme}) => theme.spacing.padding.small};
  }
`;

export const Main = styled.main`
  padding: ${({theme}) => theme.spacing.padding.large} 0; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.normal}; 

  @media screen and (max-width: 768px) {
    padding: ${({theme}) => theme.spacing.padding.small}; 
  }
`;