import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import {
  MenuWrapper,
  Menu
} from "./styles";

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
            <a href="/" className={actualPage.pathname === "/" ? "active" : ""}>
              Página inicial
            </a>
          </li>
          <li>
            <a 
              href="/catalogo" 
              className={actualPage.pathname === "/catalogo" ? "active" : ""}
              onClick={() => setActualPage({...actualPage, pageTitle: "Catálogo"})}
            >
              Catálogo
            </a>
          </li>
          <li>
            <a 
              href="/leitor" 
              className={actualPage.pathname === "/leitor" ? "active" : ""}
              onClick={() => setActualPage({...actualPage, pageTitle: "Leitor"})}
            >
              Leitor
            </a>
          </li>
          <li>
            <a 
              href="/produtor" 
              className={actualPage.pathname === "/produtor" ? "active" : ""}
              onClick={() => setActualPage({...actualPage, pageTitle: "Produtor"})}  
            >
              Produtor
            </a>
          </li>
          <li>
            <a 
              href="/blog" 
              className={actualPage.pathname === "/blog" ? "active" : ""}
              onClick={() => setActualPage({...actualPage, pageTitle: "Blog"})}
            >
              Blog
            </a>
          </li>
          <li>
            <a 
              href="/sobre" 
              className={actualPage.pathname === "/sobre" ? "active" : ""}
              onClick={() => setActualPage({...actualPage, pageTitle: "Sobre nós"})}
            >
              Sobre nós
            </a>
          </li>
        </Menu>
      </MenuWrapper>
    </Container>
  );
}