import React from "react";
import {
  Container,
  Content,
  Image,
  ReviewArea,
  Profile,
  Review,
  Rate
} from "./styles";
import profile from "assets/images/photo-profile.jpg";
import headerBg from "assets/images/background-perfil-quad.png";
import ranking from "assets/icons/ranking.png";

export default function Card({ title, text }) {
  return (
    <Container>
      <h3>{title}</h3>
      <Content>
        <Image>
          <img src={headerBg} alt="Fundo do header" />
        </Image>
        <ReviewArea>
          <Profile>
            <img src={profile} alt="Foto de perfil" />
          </Profile>
          <Review>
            <span>{text}</span>
            <Rate>
              <img src={ranking} alt="Ícone de ranking" />
              <img src={ranking} alt="Ícone de ranking" />
              <img src={ranking} alt="Ícone de ranking" />
              <img src={ranking} alt="Ícone de ranking" />
              <img src={ranking} alt="Ícone de ranking" />
            </Rate>
          </Review>
        </ReviewArea>
      </Content>
    </Container>
  );
}