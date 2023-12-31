import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
      color: #FFF;
  }

  body {
    background: ${({theme}) => theme.colors.blue["900"]};
  }

  h1, h2, h3 {
    font-weight: 700;
  }

  h2, h3 {
    color: ${({theme}) => theme.colors.sectionTitle};
  }

  h2 {
    font-size: ${({theme}) => theme.fontSize.most_large};
  }

  h3 {
    font-size: ${({theme}) => theme.fontSize.base};
  }
`;
