import styled from "styled-components";

export const Container = styled.div`
  padding: 
  ${({theme}) => theme.spacing.padding.small}
  ${({theme}) => theme.spacing.padding.large};
  display: flex;
  flex-direction: column;
  gap: 8px;

  h1 {
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.detailPrimary};
    font-size: 1.5rem;
  }
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  justify-content: start;

  @media screen and (max-width: 768px) {
    padding: ${({theme}) => theme.spacing.padding.small};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  animation: fadeIn .7s;

  h2 {
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.detailPrimary};
    font-size: 1rem;
  }

  p {
    font-weight: 500;
  }

  div:has(p) {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 5px;

  a {
    background: #000;
    border-radius: 0.5rem;
    padding: ${({theme}) => theme.spacing.padding.small};
    border: 0.125rem solid transparent;
    transition: all linear .4s;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
  }

  a:hover {
    border-color: #FFF;
  }

  @media screen and (max-width: 768px) {
    margin: auto;
  }
`;

export const ImageWrapper = styled.div`
  img {
    width: 100%;
  }
`;
