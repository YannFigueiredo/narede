import styled from "styled-components";
import background from "assets/images/background-home.png";
import submitBg from "assets/images/herois_bg.jpg";

export const Container = styled.div`
  max-width: 90rem;
  width: 100%;
  overflow-x: hidden;
  margin: auto;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};
  position: relative;
  animation: rotateFromLeft .2s linear;
  background-image: url(${background});
  background-size: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: repeat;

  @media screen and (max-width: 768px) {
    gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  }
`;

export const Content = styled.div`
  display: flex;
  //gap: ${({theme}) => theme.spacing.between_elements.between_items};
  width: 100%;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};
  width: 100%;
  overflow-x: hidden;
`;

export const Chat = styled.div`
  background: ${({theme}) => theme.colors.blue["400"]};
  padding: ${({theme}) => theme.spacing.padding.small};
  border-radius: 50%;
  position: fixed;
  right: 0;
  bottom: 0;
  margin-bottom: ${({theme}) => theme.spacing.padding.small};
  margin-right: ${({theme}) => theme.spacing.padding.small};
  cursor: pointer;
  transition: all linear .2s;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(.9);
  z-index: 999;

  svg {
    fill: #FFF;
    line-height: 1;
    font-size: 1.875rem;
  }

  &:hover {
    background: ${({theme}) => theme.colors.blue["300"]};
    transform: scale(1);

    svg {
      fill: ${({theme}) => theme.colors.blue["900"]};
    }
  }
`;

export const SubmitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme}) => theme.spacing.between_elements.between_cards};
  margin: auto;
  padding: 0;
  width: 100%;
  background-image: url(${submitBg});
  background-position: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .bg {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(129, 228, 249, .70);
  }

  img {
    max-width: 50rem;
    z-index: 99;
  }

  @media screen and (max-width: 992px) {
    padding: 0 ${({theme}) => theme.spacing.padding.large};
  }

  @media screen and (max-width: 768px) {
    padding: 0 ${({theme}) => theme.spacing.padding.small};
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Submit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  background-color: #fff;
  width: 100%;
  z-index: 99;

  h2 {
    color: #000;
    text-transform: uppercase;
    font-size: 1.5rem;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({theme}) => theme.spacing.between_elements.small};

    img {
      width: 1.5rem;
    }
  }
`;
