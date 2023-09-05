import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
  padding: 
  ${({theme}) => theme.spacing.padding.small}
  ${({theme}) => theme.spacing.padding.large};
  text-align: center;

  h1 {
    color: ${({theme}) => theme.colors.blue["100"]};
    font-weight: 900;
    text-transform: uppercase;
  }

  @media screen and (max-width: 600px) {
    padding: ${({theme}) => theme.spacing.padding.small};

    h1 {
      font-size: ${({theme}) => theme.fontSize.large};
    }
  }
`;