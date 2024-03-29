import styled from "styled-components";

export const Container = styled.div`
  padding: 0 ${({theme}) => theme.spacing.padding.large};
  overflow: hidden;

  @media screen and (max-width: 992px) {
    padding: 0 ${({theme}) => theme.spacing.padding.large};
  }

  @media screen and (max-width: 768px) {
    padding: 0 ${({theme}) => theme.spacing.padding.small};
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: ${({theme}) => theme.spacing.between_elements.between_cards};
  display: inline-block;
  width: 100%;
  padding: 
  ${({theme}) => theme.spacing.padding.small} 
  ${({theme}) => theme.spacing.padding.very_small};
  border-radius: ${({theme}) => theme.spacing.radius.small};
  background-color: #001620;

  h2 {
    color: #FFF;
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
    gap: ${({theme}) => theme.spacing.between_elements.small};
    justify-content: center;
  }
`;