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
  opacity: 0;

  @media screen and (max-width: 768px) {
    gap: ${({theme}) => theme.spacing.between_elements.small};
    justify-content: center;
  }
`;