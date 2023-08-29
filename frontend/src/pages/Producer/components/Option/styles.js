import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  max-width: 220px;
  min-width: 180px;

  h2 {
    color: ${({theme}) => theme.colors.blue["100"]};
    font-weight: 900;
    width: 100%;
  }

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
`;

export const Content = styled.div`
  background: ${({theme}) => theme.colors.gray["100"]};
  border-radius: 30px;
  padding: ${({theme}) => theme.spacing.padding.normal};
  width: 100%;
  min-height: 200px;
  text-align: right;

  span {
    color: ${({theme}) => theme.colors.blue["900"]};
    font-weight: 900;
    font-size: ${({theme}) => theme.fontSize.base_large};
    cursor: pointer;
  }
`;