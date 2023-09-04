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
    width: 100%;
    text-align: left;
  }

  @media screen and (max-width: 600px) {
    padding: ${({theme}) => theme.spacing.padding.small} 0 0 0;

    h2 {
      font-size: 1.375rem;
    }
  }
`;

export const ComicsWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};

  .small {
    width: 10rem;

    .cover {
      height: 13rem;
    }
  }

  .medium {
    width: 11rem;
    
    .cover {
      height: 15rem;
    }
  }

  .large {
    width: 12.5rem;
    
    .cover {
      height: 16.25rem;
    }
  }

  @media screen and (max-width: 992px) {
    .medium, .large {
      width: 10rem;

      .cover {
        height: 13rem;
      }
    }
  }
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