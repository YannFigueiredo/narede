import React from "react";
import { Container, ImageWrapper, MenuWrapper, Menu } from "./styles";
import Logo from "../../assets/images/Logo";

export default function Header() {
  return(
    <Container>
      <ImageWrapper>
        <Logo />
      </ImageWrapper>
      <MenuWrapper>
        <Menu>
          <li>Categorias</li>
          <li>Sobre</li>
        </Menu>
      </MenuWrapper>
    </Container>
  );
}