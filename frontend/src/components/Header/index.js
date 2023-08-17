import React from "react";
import { Container, ImageWrapper, MenuWrapper, Menu } from "./styles";
import Logo from "assets/images/logo.png";
import LoginIcon from "@mui/icons-material/Login";

export default function Header() {
  return(
    <Container>
      <ImageWrapper href="/">
        <img src={Logo} alt="Logo do site Nave HQ"/>
      </ImageWrapper>
      <MenuWrapper>
        <Menu>
          <li><a href="/biblioteca">Biblioteca</a></li>
          <li><a href="#">Leitor</a></li>
          <li><a href="#">Produtor</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Sobre</a></li>
        </Menu>
        <LoginIcon />
      </MenuWrapper>
    </Container>
  );
}