import styled from "styled-components";

export const Container = styled.div`
  padding: ${({theme}) => theme.spacing.padding.large};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};

  h2 {
    display: inline-block;
    width: 100%;
    text-align: left;
  }
`;

export const ComicsWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  overflow: hidden;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
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