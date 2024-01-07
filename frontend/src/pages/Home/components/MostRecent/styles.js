import styled from "styled-components";

export const TitleWrapper = styled.div`
  margin-bottom: ${({theme}) => theme.spacing.between_elements.between_cards};
  display: inline-block;
  width: 100%;
  padding: ${({theme}) => theme.spacing.padding.small} 0;
  border-radius: ${({theme}) => theme.spacing.radius.small};

  h2 {
    text-transform: uppercase;
  }

  @media screen and (max-width: 600px) {
    h2 {
      font-size: 1.375rem;
    }
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    gap: ${({theme}) => theme.spacing.between_elements.small};
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;