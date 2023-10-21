import styled from "styled-components";

export const Main = styled.div`
  padding: ${({theme}) => theme.spacing.padding.large} 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  overflow: hidden;

  h2 {
    display: inline-block;
    text-align: left;
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
  max-width: 50rem;
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
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  grid-template-rows: auto;
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