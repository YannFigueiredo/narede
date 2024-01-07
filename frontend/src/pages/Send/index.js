import React from "react";
import { Container } from "components/Container/page.js";
import {
  Main,
  SubmitWrapper,
  ButtonWrapper
} from "./styles.js";
import SubmitImage from "assets/images/submissao-img.png";
import SubmitText from "assets/images/submissao-texto.png";

export default function Send() {
  return(
    <Container>
      <Main>
        <SubmitWrapper>
          <img src={SubmitImage} alt="Imagem da seção de submissão" />
          <img src={SubmitText} alt="Texto da seção de submissão" />
        </SubmitWrapper>
        <ButtonWrapper>
          <a href="#">Regras de submissão e envio</a>
        </ButtonWrapper>
      </Main>
    </Container>
  );
}