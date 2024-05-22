import styled from "styled-components";

export const Container = styled.div``;

export const Main = styled.div`
  padding: ${({theme}) => theme.spacing.padding.small} 0;

  .fade-in {
    animation: fadeIn 1.5s;
    opacity: 1;
  }
`;

export const Title = styled.h2`
  color: #FFF;
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};
  opacity: 0;
  overflow-x: auto;
  padding: ${({theme}) => theme.spacing.padding.very_small};
  overflow-y: hidden;
  cursor: grab;

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none;
  }

  & {
    overflow: -moz-scrollbars-none;
    overflow-x: auto;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.small};
  background: #FFF;
  padding: 
  ${({theme}) => theme.spacing.padding.big_small}
  ${({theme}) => theme.spacing.padding.very_small};
  border-radius: 1.875rem;

  h3 {
    text-align: center;
    color: ${({theme}) => theme.colors.sectionTitle};
  }

  span {
    color: #000;
  }
`;