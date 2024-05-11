import React from "react";
import {
  Container,
  Main,
  SubmitWrapper,
  ButtonWrapper
} from "./styles.js";
import SubmitImage from "assets/images/submissao-img.png";

export default function Send() {
  return(
    <Container>
      <Main>
        <h2>Submissão</h2>
        <SubmitWrapper>
          <img src={SubmitImage} alt="Imagem da seção de submissão" />
        </SubmitWrapper>
        <ButtonWrapper>
          <a href="#">Regras de submissão e envio</a>
        </ButtonWrapper>
        <div className="bg"></div>
      </Main>
    </Container>
  );
}