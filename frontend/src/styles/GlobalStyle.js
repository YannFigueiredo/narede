import { createGlobalStyle } from "styled-components";
import homeBg from "assets/images/bg_home.jpg";
import homeMobileBg from "assets/images/bg_mobile_home.jpg";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NexaBold';
    src:url('src/assets/fonts/NexaBold/NexaBold.ttf.woff') format('woff'),
        url('src/assets/fonts/NexaBold/NexaBold.ttf.svg#NexaBold') format('svg'),
        url('src/assets/fonts/NexaBold/NexaBold.ttf.eot'),
        url('src/assets/fonts/NexaBold/NexaBold.ttf.eot?#iefix') format('embedded-opentype'); 
    font-weight: normal;
    font-style: normal;
  }

  @keyframes moveFromTop {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes moveFromBottom {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
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
      font-family: "Arial Rounded MT", "Arial", sans-serif;
      font-weight: 400;
      color: #FFF;
  }

  body {
    background-image: url(${homeBg});
    background-size: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: repeat;
    max-width: 100%;
    overflow-x: hidden !important;

    @media screen and (max-width: 768px) {
      background-image: url(${homeMobileBg});
    }
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'NexaBold', sans-serif;
  }

  h1, h2 {
    font-weight: 900;
  }

  h3 {
    font-weight: 700;
  }

  h2, h3 {
    color: #FFF;
  }

  h2 {
    font-size: ${({theme}) => theme.fontSize.most_large};
  }

  h3 {
    font-size: ${({theme}) => theme.fontSize.base};
  }

  .initial-fade {
    opacity: 0;
  }

  .initial-bottom {
    transform: translateY(100%);
    opacity: 0;
    overflow: hidden;
  }

  .move-from-left {
    animation: moveFromLeft .4s forwards;
  }

  .move-from-bottom {
    animation: moveFromBottom .7s forwards;
    opacity: 1;
  }

  .fade-in {
    animation: fadeIn .7s;
    opacity: 1;
  }

  .rotate-from-left {
    animation: rotateFromLeft .2s linear infinite;
  }
`;
