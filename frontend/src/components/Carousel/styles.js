import styled from "styled-components";

export const Container = styled.div`
  overflow-y: scroll;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(20, auto);
  grid-template-rows: auto;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
`;