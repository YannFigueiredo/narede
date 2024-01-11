import styled from "styled-components";

export const Reader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};
  padding: ${({theme}) => theme.spacing.padding.small};
  animation: rotateFromLeft .2s linear;
  
  img {
    max-width: 43.75rem;
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};

  @media screen and (max-width: 600px) {
    h2 {
      font-size: ${({theme}) => theme.fontSize.base_large};
    }
  }
`;