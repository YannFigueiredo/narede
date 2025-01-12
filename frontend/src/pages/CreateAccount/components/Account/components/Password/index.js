import React from "react";
import {
  Container,
  InputsWrapper,
  InputWrapper,
  ButtonWrapper,
  LoginOptions,
  LoginOption,
  SocialWrapper
} from "./styles";
import Input from "components/Input";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import Behance from "assets/icons/behance-perfil-quad-blue.png";
import Instagram from "assets/icons/instagram-perfil-quad-blue.png";
import WhatsApp from "assets/icons/whatsapp-perfil-quad-blue.png";
import Twitter from "assets/icons/twitter-perfil-quad-blue.png";
import TikTok from "assets/icons/tiktok-perfil-quad-blue.png";

export default function Password() {
  return(
    <Container>
      <h2>Segurança da conta</h2>
      <InputsWrapper>
        <InputWrapper>
          <label>Senha</label>
          <Input 
            width="100%"
            className="input-infos"
          />
        </InputWrapper>
        <InputWrapper>
          <label>Confirmar senha</label>
          <Input 
            width="100%"
            className="input-infos"
          />
        </InputWrapper>
      </InputsWrapper>
      <LoginOptions>
        <LoginOption>
          <FacebookRoundedIcon className="login-icon" />
          <span>Cadastrar com o Facebook</span>
        </LoginOption>
        <LoginOption>
          <GoogleIcon className="login-icon" />
          <span>Cadastrar com o Google</span>
        </LoginOption>
      </LoginOptions>
      <SocialWrapper>
        <img src={Behance} alt="Ícone do Behance" />
        <img src={Instagram} alt="Ícone do Instagram" />
        <img src={WhatsApp} alt="Ícone do WhatsApp" />
        <img src={Twitter} alt="Ícone do Twitter" />
        <img src={TikTok} alt="Ícone do TikTok" />
      </SocialWrapper>
    </Container>
  );
}