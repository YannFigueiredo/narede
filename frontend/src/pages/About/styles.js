import styled from "styled-components";

export const Container = styled.div`
  max-width: 90rem;
  margin: auto;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};
  position: relative;
  animation: rotateFromLeft .2s linear;

  h3 {
    color: ${({theme}) => theme.colors.backgroundPrimary};
    font-size: 1.5rem;
    display: inline-block;
    margin-left: ${({theme}) => theme.spacing.padding.very_large};
    text-transform: uppercase;
  }

  @media screen and (max-width: 768px) {
    gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  }
`;

export const Main = styled.main`
  animation: rotateFromLeft .2s linear;
  margin: 1rem 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  h1 {
    text-align: center;
    font-weight: 400;
    font-size: 4rem;
    letter-spacing: .7rem;
  }
`;

export const Intro = styled.p`
  font-size: 1.7rem;
  color: rgba(255, 255, 255, .4);
  max-width: 40rem;
  text-align: center;
  margin: auto;
`;

export const Infos = styled.div`
  max-width: 70rem;
  padding: 1rem 3rem;
  margin: auto;
  background: rgb(255, 255, 255);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Text = styled.div`
  height: fit-content;
  
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: all linear .4s;
    border-left: 2px solid rgba(0, 109, 160, .2);
    padding: 1rem 0 1rem 1.5rem;
  }

  div:hover {
    border-color: ${({theme}) => theme.colors.backgroundPrimary};
  }

  h4 {
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.backgroundPrimary};
    font-weight: 900;
    font-size: 1rem;
  }
  p{
    color: ${({theme}) => theme.colors.backgroundSecondary};
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: flex-end;

  img {
    width: 75%;
    height: auto;
    border-radius: 1rem;
  }

  @media screen and (max-width: 992px) {
    img {
      height: 25rem;
    }
  }

  @media screen and (max-width: 768px) {
    justify-content: center;

    img {
      height: auto;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.padding.large};
  padding: 
  0
  ${({theme}) => theme.spacing.padding.very_large}
  ${({theme}) => theme.spacing.padding.large};

  h3 {
    color: ${({theme}) => theme.colors.backgroundPrimary};
  }

  @media screen and (max-width: 768px) {
    padding: ${({theme}) => theme.spacing.padding.small};
  }
`;