import styled from "styled-components";

export const Main = styled.main`
  padding: 
  ${({theme}) => theme.spacing.padding.small}
  ${({theme}) => theme.spacing.padding.large};

  @media screen and (max-width: 600px) {
    padding: ${({theme}) => theme.spacing.padding.small}
  }
`;

export const ComicsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;