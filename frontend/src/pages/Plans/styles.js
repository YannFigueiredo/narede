import styled from "styled-components";
import background from "assets/images/background.png";
import backgroundCard from "assets/images/background-card.png";

export const Container = styled.div`
  max-width: 90rem;
  margin: auto;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};
  position: relative;
  background-image: url(${background});
  background-size: content;
  background-repeat: repeat;
  background-position: left top;
  animation: rotateFromLeft .2s linear;
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  justify-content: start;
  padding: 
  ${({theme}) => theme.spacing.padding.small}
  ${({theme}) => theme.spacing.padding.large};

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
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};
  animation: fadeIn .7s;

  h1 {
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.detailPrimary};
    font-size: 3.125rem;
  }

  span {
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

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

export const Benefits = styled.div`
  width: 68.75rem;
  margin: auto;

  h1 {
    display: inline-block;
    text-transform: uppercase;
    padding: 0 ${({theme}) => theme.spacing.padding.large};
  }

  h1 span {
    color: ${({theme}) => theme.colors.detailPrimary};
    font-weight: 700;
  }

  span {
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    
    h1 {
      padding: 0 ${({theme}) => theme.spacing.padding.small};
      text-align: center;
    }
  }
`;

export const List = styled.ul`
  li {
    list-style-type: none;
    padding: ${({theme}) => theme.spacing.padding.normal};
    display: flex;
    gap: ${({theme}) => theme.spacing.between_elements.between_cards};

    img {
      width: 3rem;
    }
  }

  span {
    font-size: 1rem;
  }

  @media screen and (max-width: 768px) {
    li {
      padding: ${({theme}) => theme.spacing.padding.small};
    }
  }
`;

export const Options = styled.div`
  padding: 
  ${({theme}) => theme.spacing.padding.small}
  ${({theme}) => theme.spacing.padding.large};
  background: ${({theme}) => theme.colors.backgroundPrimary};
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};

  h2 {
    color: #FFF;
    text-transform: uppercase;
  }

  @media screen and (max-width: 768px) {
    overflow: auto;
    padding: ${({theme}) => theme.spacing.padding.small};
  }
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};

  .active {
    border-color: ${({theme}) => theme.colors.detailPrimary};
  }
`;

export const Card = styled.div`
  padding: ${({theme}) => theme.spacing.padding.small};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background-image: url(${backgroundCard});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 15.625rem;
  height: 21.875rem;
  border: 0.188rem solid transparent;
  transition: all linear .4s;
  cursor: pointer;

  &:hover {
    border-color: ${({theme}) => theme.colors.detailPrimary};
  }

  h3, h4 {
    text-transform: uppercase;
    color: #FFF;
    font-weight: 700;
  }

  h4 {
    font-size: ${({theme}) => theme.fontSize.regular};
  }

  span {
    font-weight: 500;
    font-size: ${({theme}) => theme.fontSize.regular};
  }
`;

export const Final = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  justify-content: start;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing.between_elements.between_sections};
    padding: ${({theme}) => theme.spacing.padding.small};
  }
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};
  padding: 0 ${({theme}) => theme.spacing.padding.large};

  h1 {
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.detailPrimary};
    display: inline-block;
    width: 75%;
    font-size: ${({theme}) => theme.fontSize.very_large};
  }

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
