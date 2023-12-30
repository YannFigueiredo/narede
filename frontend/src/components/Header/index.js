import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Container, 
  ImageWrapper, 
  OptionsWrapper,
  ActionWrapper,
  MenuWrapper, 
  Menu,
  SessionManager 
} from "./styles";
import Logo from "assets/images/logo-white-variation.png";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import Input from "components/Input";

export default function Header() {
  const menu = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [actualPage, setActualPage] = useState({pathname: "", pageTitle: ""});
  const [isLogged, setIsLogged] = useState(global.localStorage.getItem("logged") === "true" ? true : false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const login = () => {
    global.localStorage.setItem("logged", "true");
    setIsLogged(global.localStorage.getItem("logged") === "true" ? true : false);
  };

  const exit = () => {
    global.localStorage.setItem("logged", "false");
    setIsLogged(global.localStorage.getItem("logged") === "false" ? false : true);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
    menu.current.style.display = "flex";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    menu.current.style.display = "none";
  };

  const updateActualPage = () => {
    setActualPage({
      pathname: global.window.location.pathname,
      pageTitle: 
      actualPage.pathname === "/catalogo" ? "Catálogo" : 
        actualPage.pathname === "/leitor" ? "Leitor" :
          actualPage.pathname === "/produtor" ? "Produtor" :
            actualPage.pathname === "/blog" ? "Blog" : 
              actualPage.pathname === "/sobre" ? " Sobre nós" : 
                actualPage.pathname.includes("/quadrinho") ? "Quadrinho" : "Busca" 
    });
  };

  const runSearch = () => {
    navigate(`/search/${search}`);
    updateActualPage();
  };

  useEffect(() => {
    if(isMenuOpen) {
      global.document.body.style.overflow = "hidden";
      global.document.documentElement.style.overflow = "hidden";
    } else {
      global.document.body.style.overflow = "auto";
      global.document.documentElement.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  useEffect(() => updateActualPage(), []);

  useEffect(() => updateActualPage(), [actualPage.pathname]);

  return(
    <Container>
      <ImageWrapper>
        <a href="/"><img src={Logo} alt="Logo do site Nave HQ"/></a>
      </ImageWrapper>
      <OptionsWrapper>
        <ActionWrapper>
          <SessionManager>
            {
              isLogged &&
              <Menu id="logged-container" variant={actualPage.pathname === "/" ? "home" : "others"}>
                <li><a href="#" title="Minha conta">Minha conta</a></li>
                <li><a href="#" title="Planos">Planos</a></li>
                <li><a href="#" title="Enviar">Enviar</a></li>
                <li><a href="#" title="Sair" onClick={exit}>Sair</a></li>
              </Menu>
            }
            {
              isLogged === false &&
              <Menu id="logged-out-container" variant={actualPage.pathname === "/" ? "home" : "others"}>
                <li><a href="#" onClick={login}>Entrar</a></li>
                <li><a href="#">Criar conta</a></li>
              </Menu>
            }
          </SessionManager>
          <Input 
            className="search-input-header"
            width="auto"
            isSearch
            placeholder="Insira título ou quadrinista"
            onChange={(e) => setSearch(e.target.value)}
            onClick={() => runSearch()}
            onKeyDown={(e) => {if(e.key === "Enter") runSearch();}}
          />
        </ActionWrapper>
        <MenuWrapper>
          <Menu id="main-menu" ref={menu}>
            <li>
              <a href="/" title="Página inicial" className={actualPage.pathname === "/" ? "active" : ""}>
                Página inicial
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
                className={actualPage.pathname === "/produtor" ? "active" : ""}
                onClick={() => setActualPage({...actualPage, pageTitle: "Produtor"})}  
              >
                Quadrinista
              </a>
            </li>
            <li>
              <a 
                href="/comunidade" 
                title="Comunidade"
                className={actualPage.pathname === "/blog" ? "active" : ""}
                onClick={() => setActualPage({...actualPage, pageTitle: "Blog"})}
              >
                Comunidade
              </a>
            </li>
            <li>
              <a 
                href="/sobre" 
                title="Sobre nós"
                className={actualPage.pathname === "/sobre" ? "active" : ""}
                onClick={() => setActualPage({...actualPage, pageTitle: "Sobre nós"})}
              >
                Sobre nós
              </a>
            </li>
            <CancelIcon id="menu-close" onClick={closeMenu} />
          </Menu>
          <MenuIcon id="menu-open" onClick={openMenu} />
        </MenuWrapper>
      </OptionsWrapper>
    </Container>
  );
}