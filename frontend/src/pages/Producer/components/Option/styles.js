import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  width: 180px;

  .add-btn {
    box-sizing: content-box;
    fill: ${({theme}) => theme.colors.blue["900"]};
    background: ${({theme}) => theme.colors.blue["100"]};
    padding: 0.3rem;
    transition: all linear .4s;
    border-radius: 50%;
    cursor: pointer;
  }

  .add-btn:hover {
    background: ${({theme}) => theme.colors.gray["100"]};
  }

  span {
    text-transform: uppercase;
    font-weight: 500;
  }
`;

export const Content = styled.div`
  background: #FFF;
  border-radius: 30px;
  width: 100%;
  text-align: right;
  overflow: hidden;
  max-height: 283px;
  max-width: 180px;

  div{
    height: 223px;
    width: 180px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  span {
    color: ${({theme}) => theme.colors.blue["900"]};
    font-weight: 900;
    font-size: ${({theme}) => theme.fontSize.base_large};
    cursor: pointer;
  }
`;