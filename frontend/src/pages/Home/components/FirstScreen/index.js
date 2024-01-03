import React from "react";
import { Container, Intro, ImageWrapper, ButtonWrapper } from "./styles";
import MainImage from "assets/images/first-screen-img.png";

export default function FirstScreen() {
  return(
    <Container>
      <Intro>
        <h1>
          Faça seu login ou crie sua conta grátis
        </h1>
        <div>
          <p>
            Crie sua conta gratuita e tenha acesso aos quadrinhos que estão na categoria grátis! Você também
            poderá conhecer todo o catálogo com milhares de quadrinhos.
          </p>
          <br/>
          <p>
            Na conta grátis você só conseguirá ler os quadrinhos que estão gratuitos no app, como Ajuricaba,
            Belém Imaginária e outros. E fica tranquilo, não precisa cadastrar seu cartão de crédito.
          </p>
        </div>
        <ButtonWrapper>
          <a href="#">Criar minha conta grátis</a>
        </ButtonWrapper>
      </Intro>
      <ImageWrapper>
        <img src={MainImage} alt="Imagem da tela principal da home antes do login" />
      </ImageWrapper>
    </Container>
  );
}