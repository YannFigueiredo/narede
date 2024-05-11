import styled from "styled-components";
import background from "assets/images/bg_send.jpg";
import background2 from "assets/images/bg_send_2.jpg";

export const Container = styled.div`
  max-width: 90rem;
  margin: auto;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};
  position: relative;
  padding: 
  0
  ${({theme}) => theme.spacing.padding.normal}
  ${({theme}) => theme.spacing.padding.large};
  background-image: url(${background});
  background-size: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 768px) {
    padding: 
    ${({theme}) => theme.spacing.padding.small}
    ${({theme}) => theme.spacing.padding.small}
    0;
    background-size: cover;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  padding: 
  ${({theme}) => theme.spacing.padding.normal}
  ${({theme}) => theme.spacing.padding.large};
  animation: rotateFromLeft .2s linear;
  background-image: url(${background2});
  background-size: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: relative;
  background-position: center;
  border: 2px solid #000;
  border-radius: ${({theme}) => theme.spacing.radius.small};
  overflow: hidden;

  h2 {
    z-index: 99;
  }

  .bg {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(129, 228, 249, .90);
  }

  @media screen and (max-width: 768px) {
    padding: ${({theme}) => theme.spacing.padding.big_small};
    background-size: cover;
    margin-bottom: ${({theme}) => theme.spacing.padding.small};

    h2 {
      font-size: ${({theme}) => theme.fontSize.base_large};
    }

    .bg {
      background-color:  rgba(20, 5, 46, .90);
    }
  }
`;

export const SubmitWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 65%;
  z-index: 99;

  img {
    max-width: 100%;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
      padding: 
      ${({theme}) => theme.spacing.padding.small}
      ${({theme}) => theme.spacing.padding.small};
      width: 100%;
    }
  }
`;

export const ButtonWrapper = styled.div`
  max-width: 21.875rem;
  background: ${({theme}) => theme.colors.sectionTitle};
  transition: all linear .4s;
  padding: ${({theme}) => theme.spacing.padding.small};
  border: 2px solid #fff;
  border-radius: ${({theme}) => theme.spacing.radius.small};
  cursor: pointer;
  z-index: 99;
  overflow: hidden;

  a {
    text-decoration: none;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    color: #000;
  }

  &:hover {
    background: ${({theme}) => theme.colors.detailPrimary};
  }

  @media screen and (max-width: 768px) {
    max-width: 17rem;

    a {
      font-size: ${({theme}) => theme.fontSize.small};
    }
  }
`;