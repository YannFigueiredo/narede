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
          <li>Categorias</li>
          <li>Lista de Leitura</li>
          <li>Sobre</li>
        </Menu>
      </MenuWrapper>
    </Container>
  );
}