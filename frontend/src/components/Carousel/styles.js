import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(20, auto);
  grid-template-rows: auto;
  overflow-x: hidden;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};

  &:hover #back-btn, &:hover #next-btn {
    opacity: 1;
  }

  #back-btn, #next-btn {
    opacity: 0;
    transition: all linear .4s;
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 97;
    height: 16.25rem;
    ${({theme}) => theme.spacing.padding.big_small};
    background: rgba(0, 0, 0, .7);

    svg {
      fill: rgba(255, 255, 255, .3);
      cursor: pointer;
      font-size: 3.125rem;
    }
  }

  #back-btn {
    left: 0;
  }

  #next-btn {
    right: 0;
  }

  #back-btn svg:hover, #next-btn svg:hover {
    fill: rgba(255, 255, 255, 1);
  }

  article {
    cursor: pointer;
  }
  
  @media screen and (max-width: 600px) {
    #back-btn, #next-btn {
      opacity: 1;
      z-index: 97;
    }
  }
`;