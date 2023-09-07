import styled from "styled-components";

export const Main = styled.main``;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.padding.large};
  padding: 
  ${({theme}) => theme.spacing.padding.large}
  ${({theme}) => theme.spacing.padding.very_large};

  @media screen and (max-width: 600px) {
    padding: ${({theme}) => theme.spacing.padding.small};
  }
`;