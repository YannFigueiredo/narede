import styled from "styled-components";

export const Container = styled.div`
  background: ${({theme}) => theme.colors.backgroundPrimaryBox};
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  padding: 
  ${({theme}) => theme.spacing.padding.small}
  ${({theme}) => theme.spacing.padding.big_small};
  margin-right: ${({theme}) => theme.spacing.padding.large};
  border-radius: 8px;
  
  h2 {
    text-transform: uppercase;
    font-size: ${({theme}) => theme.fontSize.base_large};
    text-align: center;
  }

  @media screen and (max-width: 768px) {
   margin: auto;
   width: 100%;
   padding: ${({theme}) => theme.spacing.padding.small}
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
  position: relative;

  .rank {
    position: absolute;
    top: 0;
    left: 0;
    color: #000;
    font-size: ${({theme}) => theme.fontSize.regular};
    display: inline-block;
    background: #FFF;
    padding: 0.25rem ${({theme}) => theme.spacing.padding.big_small};
    font-weight: 700;
    z-index: 99;   
  }

  &:hover {
    border: 2px solid #FFF;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};

  div {
    display: flex;
    align-items: center;
    gap: ${({theme}) => theme.spacing.between_elements.small};

    .view-icon {
      font-size: ${({theme}) => theme.fontSize.base};
    }
  }

  h3 {
    color: #FFF;
    text-transform: uppercase;
  }

  span {
    font-size: ${({theme}) => theme.fontSize.regular};
    font-weight: 700;
  }
`;