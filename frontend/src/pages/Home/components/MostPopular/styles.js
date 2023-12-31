import styled from "styled-components";

export const Container = styled.div`
  background: ${({theme}) => theme.colors.backgroundPrimaryBox};
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  padding: 
  ${({theme}) => theme.spacing.padding.small}
  ${({theme}) => theme.spacing.padding.big_small};
  
  h2 {
    text-transform: uppercase;
    font-size: ${({theme}) => theme.fontSize.base_large};
    text-align: center;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const Card = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  border: 2px solid transparent;
  transition: all linear .4s;
  cursor: pointer;
  width: 100%;

  &:hover {
    border: 2px solid #FFF;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};

  h3 {
    color: #FFF;
    text-transform: uppercase;
  }

  span {
    font-size: ${({theme}) => theme.fontSize.regular};
    font-weight: 700;
  }
`;