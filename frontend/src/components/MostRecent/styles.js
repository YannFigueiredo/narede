import styled from "styled-components";

export const TitleWrapper = styled.div`
  margin-bottom: ${({theme}) => theme.spacing.between_elements.between_cards};
  display: inline-block;
  width: 100%;
  padding: ${({theme}) => theme.spacing.padding.small} 0;
  border-radius: ${({theme}) => theme.spacing.radius.small};
`;

export const CardsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};
`;