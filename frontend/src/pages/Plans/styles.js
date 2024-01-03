import styled from "styled-components";
import background from "assets/images/background.png";
import backgroundCard from "assets/images/background-card.png";

export const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};
  position: relative;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  justify-content: start;
  padding: 
  ${({theme}) => theme.spacing.padding.small}
  ${({theme}) => theme.spacing.padding.large};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};

  h1 {
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.detailPrimary};
    font-size: 3.125rem;
  }

  span {
    font-weight: 500;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  a {
    background: #000;
    border-radius: 0.5rem;
    padding: ${({theme}) => theme.spacing.padding.small};
    border: 2px solid transparent;
    transition: all linear .4s;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
  }

  a:hover {
    border-color: #FFF;
  }
`;

export const ImageWrapper = styled.div`
  img {
    width: 100%;
  }
`;

export const Benefits = styled.div`
  width: 1100px;
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
  width: 250px;
  height: 350px;
  border: 3px solid transparent;
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
`;
