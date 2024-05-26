import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Container, 
  ImageWrapper, 
  OptionsWrapper,
  MenuWrapper, 
  Menu,
  InputWrapper,
  InputBorder
} from "./styles";
import Logo from "assets/images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import Input from "components/Input";
import Profile from "assets/icons/mobile-menu/perfil.png";
import Plans from "assets/icons/mobile-menu/planos.png";
import Send from "assets/icons/mobile-menu/enviar.png";
import About from "assets/icons/mobile-menu/sobre-nos.png";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

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
    
    if(global.window.location.pathname === "/") {
      global.window.location.reload();
    } else {
      navigate("/");
    }
  };

  const exit = () => {
    global.localStorage.setItem("logged", "false");
    setIsLogged(global.localStorage.getItem("logged") === "false" ? false : true);

    if(global.window.location.pathname === "/") {
      global.window.location.reload();
    } else {
      navigate("/");
    }
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

  useEffect(() => updateActualPage(), [actualPage.pathname, global.window.location.pathname]);

  return(
    <Container background={window.location.pathname === "/" ? true : false}>
      <ImageWrapper>
        <a href="/"><img src={Logo} alt="Logo do site Nave HQ"/></a>
      </ImageWrapper>
      <InputWrapper>
        <InputBorder>
          <Input 
            id="search"
            maxwidth={20}
            isSearch
            placeholder="Insira título ou quadrinista"
            onChange={(e) => setSearch(e.target.value)}
            onClick={() => runSearch()}
            onKeyDown={(e) => {if(e.key === "Enter") runSearch();}}
          />
        </InputBorder>
      </InputWrapper>
      <OptionsWrapper>
        <MenuWrapper>
          <Menu id="main-menu" ref={menu}>
            <li>
              <a href="/" title="Página inicial" className={actualPage.pathname === "/" ? "active" : ""}>
                Início
              </a>
            </li>
            {
              isLogged &&
                <li onClick={() => navigate("/conta")}>
                  <img src={Profile} alt="Ícone de perfil" />
                  <a 
                    href="/conta" 
                    title="Minha conta"
                    className={actualPage.pathname === "/conta" ? "active" : ""}
                  >
                    Perfil
                  </a>
                </li>
            }
            {
              isLogged &&
                <li onClick={() => navigate("/planos")}>
                  <img src={Plans} alt="Ícone de planos" />
                  <a 
                    href="/planos" 
                    title="Planos"
                    className={actualPage.pathname === "/planos" ? "active" : ""}
                  >
                    Planos
                  </a>
                </li>
            }
            {
              isLogged &&
                <li onClick={() => navigate("/enviar")}>
                  <img src={Send} alt="Ícone de enviar" />
                  <a 
                    href="/enviar" 
                    title="Enviar"
                    className={actualPage.pathname === "/enviar" ? "active" : ""}
                  >
                    Enviar
                  </a>
                </li>
            }
            {
              isLogged &&
                <li id="about-btn-mobile" onClick={() => navigate("/sobre")}>
                  <img src={About} alt="Ícone de sobre nós" />
                  <a 
                    href="/sobre" 
                    title="Sobre nós"
                    className={actualPage.pathname === "/sobre" ? "active" : ""}
                    onClick={() => setActualPage({...actualPage, pageTitle: "Sobre nós"})}
                  >
                    Sobre
                  </a>
                </li>
            }
            {
              isLogged === false &&
                <li onClick={() => navigate("/planos")}>
                  <img src={Plans} alt="Ícone de planos" />
                  <a 
                    href="/planos" 
                    title="Planos"
                    className={actualPage.pathname === "/planos" ? "active" : ""}
                  >
                    Planos
                  </a>
                </li>
            }
            {
              isLogged === false &&
                <li id="about-btn-mobile" onClick={() => navigate("/sobre")}>
                  <img src={About} alt="Ícone de sobre nós" />
                  <a 
                    href="/sobre" 
                    title="Sobre nós"
                    className={actualPage.pathname === "/sobre" ? "active" : ""}
                    onClick={() => setActualPage({...actualPage, pageTitle: "Sobre nós"})}
                  >
                    Sobre
                  </a>
                </li>
            }
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
            {
              isLogged === false &&
                <li onClick={login}>
                  <LoginIcon className="menu-icon" />
                  <a href="#">Entrar</a>
                </li>
            }
            {
              isLogged === false &&
                <li>
                  <AppRegistrationIcon className="menu-icon" />
                  <a href="#">Criar conta</a>
                </li>
            }
            {
              isLogged &&
                <li onClick={exit}>
                  <LogoutIcon className="menu-icon" />
                  <a href="#" title="Sair">Sair</a>
                </li>
            }
            <CancelIcon id="menu-close" onClick={closeMenu} />
          </Menu>
          <MenuIcon id="menu-open" onClick={openMenu} />
        </MenuWrapper>
      </OptionsWrapper>
    </Container>
  );
}