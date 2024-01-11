import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};
  position: relative;
  padding-bottom: ${({theme}) => theme.spacing.padding.large};
  animation: rotateFromLeft .2s linear;

  @media screen and (max-width: 768px) {
    gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  }
`;