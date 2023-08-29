import React from "react";
import { 
  Container,
  Main,
  Header,
  Info,
  Contact
} from "./styles";
import Photo from "assets/images/generic-user.png";
import EditIcon from "@mui/icons-material/Edit";

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
          <h4>Contatos</h4>
          <div>
            <span>(11) 99988-9988</span>
            <span>fulanodetal@gmail.com</span>
          </div>
        </Contact>
      </Main>
      <EditIcon className="edit-btn" fontSize="large" />
    </Container>
  );
}