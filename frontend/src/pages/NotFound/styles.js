import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  h1 {
    color: ${({theme}) => theme.colors.blue["100"]};
    font-weight: 900;
    text-transform: uppercase;
  }
`;