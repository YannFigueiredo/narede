import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  max-width: 18.75rem;
  margin-top: -9.375rem;

  .edit-btn {
    background: ${({theme}) => theme.colors.blue["100"]};
    transition: all linear .4s;
    border-radius: 50%;
    font-size: 2rem;
    fill: ${({theme}) => theme.colors.blue["900"]};
    padding: 0.4rem;
    cursor: pointer;
    box-sizing: content-box;
  }

  .edit-btn:hover {
    background: ${({theme}) => theme.colors.gray["100"]};
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin-top: -28.75rem;
    max-width: 22rem;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  padding: 
  ${({theme}) => theme.spacing.padding.large}
  ${({theme}) => theme.spacing.padding.small};
  background: #FFF;
  border-radius: 2.1875rem;
  min-height: 25rem;
  height: 100%;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme}) => theme.spacing.between_elements.small};

  h3 {
    font-weight: 700;
    font-size: 1.5rem;
    color: ${({theme}) => theme.colors.backgroundSecondary};
  }
  
  img {
    width: 100%;
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
  }

  span {
    background: ${({theme}) => theme.colors.backgroundSecondary};
    font-size: .75rem;
    border-radius: 6px;
    padding: 5px;
  }
`;

export const Info = styled.p`
  font-size: ${({theme}) => theme.fontSize.regular};
  color: ${({theme}) => theme.colors.backgroundSecondary};
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  margin-top: 1.25rem;

  h4 {
    font-weight: 700;
    color: ${({theme}) => theme.colors.backgroundSecondary};
  }

  div {
    display: flex;
    gap: ${({theme}) => theme.spacing.between_elements.small};
  }

  div img {
    width: 1.875rem;
    background-color: ${({theme}) => theme.colors.backgroundSecondary};
    border-radius: 50%;
    padding: 0.3rem;
    cursor: pointer;
    transition: all linear .4s;
  }

  div img:hover {
    background-color: ${({theme}) => theme.colors.detailPrimary};
  }

  span {
    color: ${({theme}) => theme.colors.backgroundSecondary};
    font-size: ${({theme}) => theme.fontSize.regular};
  }
`;