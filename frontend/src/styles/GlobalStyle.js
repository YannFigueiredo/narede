import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @keyframes moveFromTop {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes moveFromBottom {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes moveFromLeft {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes moveFromRight {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes rotateFromLeft {
    0% {
      transform: rotate(-90deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

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

  .move-from-left {
    animation: moveFromLeft .4s forwards;
  }

  .fade-in {
    animation: fadeIn .7s;
    opacity: 1;
  }

  .rotate-from-left {
    animation: rotateFromLeft .2s linear infinite;
  }
`;
