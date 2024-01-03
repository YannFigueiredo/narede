import styled from "styled-components";
import background from "assets/images/background.png";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};
  padding: 
  ${({theme}) => theme.spacing.padding.small}
  ${({theme}) => theme.spacing.padding.large};
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  h1 {
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.detailPrimary};
    display: inline-block;
    width: 75%;
    font-size: ${({theme}) => theme.fontSize.very_large};
  }
`;

export const ImageWrapper = styled.div`
  img {
    height: 100%;
    width: 100%;
  }
`;

export const ButtonWrapper = styled.a`
  a {
    background: #000;
    border-radius: 0.5rem;
    padding: ${({theme}) => theme.spacing.padding.small};
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    border: 2px solid transparent;
    transition: all linear .4s;
  };

  a:hover {
    border-color: #FFF;
  }
`;