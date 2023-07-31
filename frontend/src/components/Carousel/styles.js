import styled from "styled-components";

export const Container = styled.div`
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
`;