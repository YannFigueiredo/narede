import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import {
  MenuWrapper,
  Menu
} from "./styles";
import Twitter from "assets/icons/twitter-perfil-quad.png";
import Instagram from "assets/icons/instagram-perfil-quad.png";
import TikTok from "assets/icons/tiktok-perfil-quad.png";

export default function Footer() {
  const [actualPage, setActualPage] = useState("");

  const updateActualPage = () => {
    setActualPage({
      pathname: global.window.location.pathname,
      pageTitle: 
      actualPage.pathname === "/catalogo" ? "Catálogo" : 
        actualPage.pathname === "/leitor" ? "Leitor" :
          actualPage.pathname === "/produtor" ? "Produtor" :
            actualPage.pathname === "/blog" ? "Blog" : "Sobre nós" 
    });
  };

  useEffect(() => updateActualPage(), []);

  useEffect(() => updateActualPage(), [actualPage.pathname]);

  return(
    <Container>
      <MenuWrapper>
        <Menu variant={actualPage.pathname === "/" ? "home" : "others"}>
          <li>
            <img src={Twitter} alt="Ícone do Twitter" />
            <span>@narede</span>
          </li>
          <li>
            <img src={Instagram} alt="Ícone do Instagram" />
            <span>@narede</span>
          </li>
          <li>
            <img src={TikTok} alt="Ícone do TikTok" />
            <span>@narede</span>
          </li>
        </Menu>
      </MenuWrapper>
    </Container>
  );
}