import React from "react";
import { Container, ImageWrapper } from "./styles";
import Logo from "../../assets/images/logo-and-title.png";

export default function Intro() {
  return(
    <Container>
      <ImageWrapper>
        <img src={Logo} alt="Logo do site Nave HQ na seção principal da página inicial" />
      </ImageWrapper>
      <span>Percorrendo novos horizontes da criatividade</span>
    </Container>
  );
}