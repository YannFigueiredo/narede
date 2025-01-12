import styled from "styled-components";

export const Container = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  //margin-right: ${({theme}) => theme.spacing.padding.large};
  min-width: 20%;
  
  h2 {
    font-size: 1.375rem;
    text-align: center;
    color: rgb(252, 189, 73);
    display: inline-block;
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
  border: 0.125rem solid transparent;
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
    display: inline-block;
    text-transform: uppercase;
    padding: ${({theme}) => theme.spacing.padding.big_small};
    font-size: 0.75rem;
  }

  span {
    font-size: 0.75rem;
    font-weight: 700;
  }
`;