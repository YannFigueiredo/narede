import React, { useState, useEffect } from "react";
import { Container, Header, Main, Infos, Profile, ImageWrapper, TagsWrapper, ButtonsWrapper, Social, Content } from "./styles";
import GenericPicture from "assets/images/generic-user.png";
import instagram from "assets/icons/instagram.png";
import twitter from "assets/icons/twitter.png";
import facebook from "assets/icons/facebook.png";
import whatsapp from "assets/icons/whatsapp.png";

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

        </Content>
      </Main>
    </Container>
  );
}