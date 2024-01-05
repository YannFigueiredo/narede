import React from "react";
import { 
  Container,
  Main,
  Header,
  Info,
  Contact
} from "./styles";
import Photo from "assets/images/generic-user.png";
import Behance from "assets/icons/behance-perfil-quad.png";
import Instagram from "assets/icons/instagram-perfil-quad.png";
import WhatsApp from "assets/icons/whatsapp-perfil-quad.png";
import Twitter from "assets/icons/twitter-perfil-quad.png";
import TikTok from "assets/icons/tiktok-perfil-quad.png";

export default function Infos() {
  return(
    <Container>
      <Main>
        <Header>
          <img src={Photo} alt="Foto de perfil" />
          <h3>Fulano</h3>
        </Header>
        <Info>
          Eu cresci em Santarém e atualmente moro em Belém. Quando não estou trabalhando como escritor, você pode me encontrar jogando videogame. Eu adoro conhecer novas pessoas e explorar novos lugares.
        </Info>
        <Contact>
          <h4>Entre em contato</h4>
          <div>
            <img src={Behance} alt = "ícone da behance" />
            <img src={Instagram} alt = "ícone da instagram" />
            <img src={WhatsApp} alt = "ícone da whatsapp" />
            <img src={Twitter} alt = "ícone da twitter" />
            <img src={TikTok} alt = "ícone da tiktok" />
          </div>
        </Contact>
      </Main>
    </Container>
  );
}