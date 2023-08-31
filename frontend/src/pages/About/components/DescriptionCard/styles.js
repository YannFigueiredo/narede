import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  padding: 
  ${({theme}) => theme.spacing.padding.small}
  ${({theme}) => theme.spacing.padding.very_large}
  ${({theme}) => theme.spacing.padding.very_large};
  background: ${({theme}) => theme.colors.gray["100"]};
  border-radius: 1.25rem;
  max-width: 50rem;

  &:nth-child(even) {
    align-self: flex-end;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: ${({variant}) => variant === "left" ? "flex-start" : "flex-end"};
  align-items: flex-start;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};

  h2 {
    line-height: 1;
  }
`;

export const Identifier = styled.h2`
  color: ${({theme}) => theme.colors.blue["400"]};
  font-size: 5rem;
  font-weight: 900;
`;

export const Title = styled.h2`
  color: ${({theme}) => theme.colors.blue["400"]};
  font-size: 2.5rem;
  font-weight: 900;
  margin-top: 0.3125rem;
`;

export const Description = styled.p`
  color: ${({theme}) => theme.colors.blue["900"]};
  font-size: ${({theme}) => theme.fontSize.base_large};
  font-weight: 700;
  text-align: justify;
`;