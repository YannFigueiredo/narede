import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  max-width: 18.75rem;

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

  @media screen and (max-width: 600px) {
    max-width: 100%;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  padding: 
  ${({theme}) => theme.spacing.padding.large}
  ${({theme}) => theme.spacing.padding.small};
  background: ${({theme}) => theme.colors.gray["100"]};
  border-radius: 2.1875rem;
  min-height: 25rem;
  height: 100%;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme}) => theme.spacing.between_elements.small};
  color: ${({theme}) => theme.colors.blue["900"]};

  h3 {
    font-weight: 700;
    font-size: 1.5rem;
    color: ${({theme}) => theme.colors.blue["900"]};
    text-transform: uppercase;
  }
  
  img {
    width: 100%;
    max-width: 5rem;
    height: 100%;
    border-radius: 50%;
  }
`;

export const Info = styled.p`
  font-size: ${({theme}) => theme.fontSize.regular};
  color: ${({theme}) => theme.colors.blue["900"]};
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};

  h4 {
    font-weight: 700;
    color: ${({theme}) => theme.colors.blue["900"]};
    text-transform: uppercase;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({theme}) => theme.spacing.between_elements.small};
  }

  span {
    color: ${({theme}) => theme.colors.blue["900"]};
    font-size: ${({theme}) => theme.fontSize.regular};
  }
`;