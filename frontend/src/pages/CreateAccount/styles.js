import styled from "styled-components";

export const Container = styled.div`
  max-width: 90rem;
  margin: 20px auto 20px;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};
  animation: rotateFromLeft .2s linear;
`;

export const Final = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  opacity: 1;

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

export const ImageWrapper = styled.div`
  width: fit-content;
  height: fit-content;

  img {
    max-width: 550px;
    width: 100%;
  }
`;
