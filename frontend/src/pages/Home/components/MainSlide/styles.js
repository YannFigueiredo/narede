import styled from "styled-components";

export const Tabs = styled.div`
  max-width: 40rem;
  width: 100%;
  height: 0.3rem;
  border: radius;
  position: relative;
  background-color: #FFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  margin-bottom: .5rem;

  div {
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background-color: orange;
    position: absolute;
    border: 1px solid #000;
  }

  div:nth-child(1) {
    left: 0;
  }

  div:nth-child(2) {
    left: 50%;
  } 

  div:nth-child(3) {
    right: 0;
  }

  .active {
    width: 0.3rem;
    height: 2rem;
    transition: all linear .2s;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  padding: ${({theme}) => theme.spacing.padding.large} 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  overflow: hidden;

  h2 {
    color: #FFF;
    display: inline-block;
    padding: 
    ${({theme}) => theme.spacing.padding.very_small}
    ${({theme}) => theme.spacing.padding.normal};
    border-radius: ${({theme}) => theme.spacing.radius.small};
    text-transform: uppercase;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 600px) {
    padding: ${({theme}) => theme.spacing.padding.small} 0 0 0;

    h2 {
      font-size: 1.375rem;
    }
  }
`;

export const SlideContainer = styled.div`
  overflow-x: hidden;
  position: relative;
  width: 100%;

  .slide-side {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 6.25rem;
    z-index: 999;
  }

  .left-side {
    left: 0;
    background: linear-gradient(to right, ${({theme}) => theme.colors.blue["900"]}, transparent);
  }

  .right-side {
    right: 0;
    background: linear-gradient(to left, ${({theme}) => theme.colors.blue["900"]}, transparent);
  }
`;

export const ComicsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};

  .medium, .large {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .medium {
    width: 10rem;

    .cover {
      height: 13rem;
    }
  }

  .large {
    width: 12.5rem;
    
    .cover {
      height: 16.25rem;
    }
  }

  /*@media screen and (max-width: 600px) {
    .large {
      width: 11rem;
      
      .cover {
        height: 15rem;
      }
    }
  }*/
`;

export const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.small};

  div {
    width: 18px;
    height: 18px;
    background: ${({theme}) => theme.colors.gray["100"]};
    border-radius: 50%;
    cursor: pointer;
    transition: all linear .4s;
  }

  div:hover {
    background: ${({theme}) => theme.colors.blue["100"]};
  }

  .active {
    width: 60px;
    border-radius: 10px;
    transition: all linear .1s;
    background: ${({theme}) => theme.colors.blue["100"]};
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.normal};
`;

export const Divider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  div:nth-child(odd) {
    background-color: orange;
    border-radius: 50%;
    width: 0.5rem;
    height: 0.5rem;
    border: 1px solid #000;
  }

  div:nth-child(even) {
    max-height: 14rem;
    height: 100vh;
    width: 0.2rem;
    border-radius: 50%;
    background-color: #FFF;
  }

  span {
    display: inline-block;
    background-color: orange;
    border-radius: 50%;
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    top: 50%;
    border: 1px solid #000;
  }
`;