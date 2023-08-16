import React from "react";
import { Container, ImageWrapper, MenuWrapper, Menu } from "./styles";
import Logo from "assets/images/logo.png";

export default function Header() {
  return(
    <Container>
      <ImageWrapper href="/">
        <img src={Logo} alt="Logo do site Nave HQ"/>
      </ImageWrapper>
      <MenuWrapper>
        <Menu>
          <li><a href="/categories">Categorias</a></li>
          <li><a href="#">Sobre</a></li>
        </Menu>
      </MenuWrapper>
    </Container>
  );
}