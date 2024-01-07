import React, { useState, useEffect } from "react";
import { 
  Container, 
  Header, 
  Main, 
  Infos, 
  Profile, 
  ImageWrapper, 
  TagsWrapper, 
  ButtonsWrapper, 
  Social, 
  Content,
  Item
} from "./styles";
import GenericPicture from "assets/images/photo-profile.jpg";
import instagram from "assets/icons/instagram.png";
import twitter from "assets/icons/twitter.png";
import facebook from "assets/icons/facebook.png";
import whatsapp from "assets/icons/whatsapp.png";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Reader() {
  const [favorites, setFavorites] = useState();
  const [historic, setHistoric] = useState();

  useEffect(() => {
    setFavorites([
      {
        id: 6,
        title: "Las Cabaças: A Primeira Aventura",
        date: "25/08/2023"
      },
      {
        id: 7,
        title: "Vero Pexe e sua Turma",
        date: "26/08/2023"
      },
      {
        id: 8,
        title: "Tailus em Busca da Semente da Vida",
        date: "27/08/2023"
      }
    ]);
    setHistoric([
      {
        id: 6,
        title: "Las Cabaças: A Primeira Aventura",
        date: "25/08/2023"
      },
      {
        id: 7,
        title: "Vero Pexe e sua Turma",
        date: "26/08/2023"
      },
      {
        id: 8,
        title: "Tailus em Busca da Semente da Vida",
        date: "27/08/2023"
      }
    ]);

    console.log(historic);
    console.log(favorites);
  }, []);

  return(
    <Container>
      <Header>
        <h2>Ryuujin Arts</h2>
        <span className="page-title">Perfil do leitor</span>
        <div>
          <SettingsIcon className="settings-icon" />
          <span>Configurações do perfil</span>
        </div>
      </Header>
      <Main>
        <Infos>
          <Profile>
            <ImageWrapper>
              <img src={GenericPicture} alt="Foto do usuário" />
            </ImageWrapper>
            <TagsWrapper>
              <span>212 salvos</span>
              <span>351 seguidores</span>
              <span>944 seguindo</span>
            </TagsWrapper>
          </Profile>
          <ButtonsWrapper>
            <button>Leituras</button>
            <button>Histórico de acesso</button>
            <button>Salvo</button>
            <button>Links</button>
          </ButtonsWrapper>
          <Social>
            <img src={instagram} alt="Ícone do instagram" />
            <img src={twitter} alt="Ícone do twitter" />
            <img src={facebook} alt="Ícone do facebook" />
            <img src={whatsapp} alt="Ícone do whatsapp" />
          </Social>
        </Infos>
        <Content>
          <Item>
            <div>
              <h3>Favoritos</h3>
            </div>
            <ul>
              <li><div></div>Belém Imaginária: muito bom!</li>
              <li><div></div>Vero-Pexe e sua Turma: divertido</li>
              <li><div></div>Açaí Pesado: vou ler o restante, com certeza</li>
            </ul>
          </Item>
          <Item>
            <div>
              <h3>Listas</h3>
            </div>
            <ul>
              <li><div></div>Quadrinhos do folclore</li>
              <li><div></div>Atuais</li>
              <li><div></div>Gratuitos</li>
            </ul>
          </Item>
          <Item>
            <div>
              <h3>Compartilhar</h3>
            </div>
            <ul>
              <li><div></div>Belém Imaginária: muito bom!</li>
              <li><div></div>Vero-Pexe e sua Turma: divertido</li>
              <li><div></div>Açaí Pesado: vou ler o restante, com certeza</li>
            </ul>
          </Item>
          <Item>
            <div>
              <h3>Recomendações</h3>
            </div>
            <ul>
              <li><div></div>Belém Imaginária: muito bom!</li>
              <li><div></div>Vero-Pexe e sua Turma: divertido</li>
              <li><div></div>Açaí Pesado: vou ler o restante, com certeza</li>
            </ul>
          </Item>
          <Item>
            <div>
              <h3>Apoios</h3>
            </div>
            <ul>
              <li><div></div>Açaí Pesado: vou ler o restante, com certeza</li>
              <li><div></div>Belém Imaginária</li>
              <li><div></div>Vero-Pexe e sua Turma: divertido</li>
            </ul>
          </Item>
          <Item>
            <div>
              <h3>Notas</h3>
            </div>
            <ul>
              <li><div></div>Belém Imaginária: 5,0</li>
              <li><div></div>Vero-Pexe e sua Turma: 3,0</li>
              <li><div></div>Açaí Pesado: 4,8</li>
            </ul>
          </Item>
          <Item className="double-col">
            <div>
              <h3>Comentários</h3>
            </div>
            <ul>
              <li><div></div>Belém Imaginária: muito bom!</li>
              <li><div></div>Vero-Pexe e sua Turma: divertido</li>
              <li><div></div>Açaí Pesado: vou ler o restante, com certeza</li>
            </ul>
          </Item>
        </Content>
      </Main>
    </Container>
  );
}