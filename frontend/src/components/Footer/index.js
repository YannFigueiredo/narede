import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import {
  MenuWrapper,
  Menu,
  MenuHeader
} from "./styles";
import Twitter from "assets/icons/twitter-perfil-quad.png";
import Instagram from "assets/icons/instagram-perfil-quad.png";
import TikTok from "assets/icons/tiktok-perfil-quad.png";

export default function Footer() {
  const [actualPage, setActualPage] = useState("");
  const [isMenuFixed, setIsMenuFixed] = useState(false);

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

  const verifySCroll = () => {
    const scrollBottom = global.window.pageYOffset + global.window.innerHeight;
    const footerTop = global.document.getElementById("footer").offsetTop;
    if (scrollBottom < footerTop - 100) {
      setIsMenuFixed(true);
    } else {
      setIsMenuFixed(false);
    }
  };

  useEffect(() => {
    updateActualPage();
  
    global.window.addEventListener("scroll", verifySCroll);

    return () => {
      global.window.removeEventListener("scroll", verifySCroll);
    };
  }, []);

  useEffect(() => updateActualPage(), [actualPage.pathname]);

  return(
    <Container id="footer">
      <MenuWrapper>
        <MenuHeader className={isMenuFixed ? "fixed-menu" : ""}>
          <li>
            <a href="/" title="Página inicial" className={actualPage.pathname === "/" ? "active" : ""}>
              Início
            </a>
          </li>
          <li>
            <a 
              href="/catalogo" 
              title="Catálogo"
              className={actualPage.pathname === "/catalogo" ? "active" : ""}
              onClick={() => setActualPage({...actualPage, pageTitle: "Catálogo"})}
            >
              Catálogo
            </a>
          </li>
          <li>
            <a 
              href="/leitor" 
              title="Leitor"
              className={actualPage.pathname === "/leitor" ? "active" : ""}
              onClick={() => setActualPage({...actualPage, pageTitle: "Leitor"})}
            >
              Leitor
            </a>
          </li>
          <li>
            <a 
              href="/quadrinista" 
              title="Quadrinista"
              className={actualPage.pathname === "/quadrinista" ? "active" : ""}
              onClick={() => setActualPage({...actualPage, pageTitle: "Quadrinista"})}  
            >
              Quadrinista
            </a>
          </li>
          <li>
            <a 
              href="/comunidade" 
              title="Comunidade"
              className={actualPage.pathname === "/comunidade" ? "active" : ""}
              onClick={() => setActualPage({...actualPage, pageTitle: "Comunidade"})}
            >
              Comunidade
            </a>
          </li>
        </MenuHeader>
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