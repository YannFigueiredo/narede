import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        color: #000;
        overflow-x: hidden;
    }

    h1, h2, h3 {
      font-family: "Comic Neue", sans-serif;
      font-weight: 700;
    }

    h2 {
      font-size: ${({theme}) => theme.fontSize.large};
      color: #FFF;
    }
`;
