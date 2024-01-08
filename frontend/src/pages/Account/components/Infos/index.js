import React from "react";
import {
  Container,
  PhotoWrapper,
  InputPhoto,
  InputsWrapper,
  InputWrapper,
  ButtonWrapper
} from "./styles";
import GenericPhoto from "assets/images/generic-user.png";
import Input from "components/Input";

export default function Infos() {
  return(
    <Container>
      <h2>Perfil</h2>
      <PhotoWrapper>
        <img src={GenericPhoto} alt="Foto de perfil" />
        <InputPhoto>
          <span>Enviar foto</span>
          <input type="file" />
        </InputPhoto>
      </PhotoWrapper>
      <InputsWrapper>
        <InputWrapper>
          <label>Nome exibido</label>
          <Input 
            width="auto"
            className="input-infos"
          />
        </InputWrapper>
        <InputWrapper>
          <label>E-mail</label>
          <Input 
            width="auto"
            className="input-infos"
          />
        </InputWrapper>
      </InputsWrapper>
      <ButtonWrapper>
        <a href="#">Salvar</a>
      </ButtonWrapper>
    </Container>
  );
}