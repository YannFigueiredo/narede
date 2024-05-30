import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  ImageWrapper,
  MenuWrapper,
  Menu,
  InputWrapper,
  InputBorder
} from "./styles";
import Logo from "assets/images/logo.png";
import Input from "components/Input";
import Profile from "assets/icons/mobile-menu/perfil.png";
import Plans from "assets/icons/mobile-menu/planos.png";
import Send from "assets/icons/mobile-menu/enviar.png";
import About from "assets/icons/mobile-menu/sobre-nos.png";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  const menu = useRef(null);
  const [actualPage, setActualPage] = useState({ pathname: "", pageTitle: "" });
  const [isLogged, setIsLogged] = useState(global.localStorage.getItem("logged") === "true" ? true : false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const searchWrapper = useRef(null);

  const login = () => {
    global.localStorage.setItem("logged", "true");
    setIsLogged(global.localStorage.getItem("logged") === "true" ? true : false);

    if (global.window.location.pathname === "/") {
      global.window.location.reload();
    } else {
      navigate("/");
    }
  };

  const exit = () => {
    global.localStorage.setItem("logged", "false");
    setIsLogged(global.localStorage.getItem("logged") === "false" ? false : true);

    if (global.window.location.pathname === "/") {
      global.window.location.reload();
    } else {
      navigate("/");
    }
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

  const openSearch = () => {
    searchWrapper.current.classList.toggle("show-search");
  };

  useEffect(() => updateActualPage(), []);

  useEffect(() => updateActualPage(), [actualPage.pathname, global.window.location.pathname]);

  return (
    <Container background={window.location.pathname === "/" ? true : false}>
      <ImageWrapper>
        <a href="/"><img src={Logo} alt="Logo do site Nave HQ" /></a>
      </ImageWrapper>
      <InputWrapper ref={searchWrapper}>
        <InputBorder>
          <Input
            id="search"
            maxwidth={20}
            isSearch
            placeholder="Insira título ou quadrinista"
            onChange={(e) => setSearch(e.target.value)}
            onClick={() => runSearch()}
            onKeyDown={(e) => { if (e.key === "Enter") runSearch(); }}
          />
        </InputBorder>
      </InputWrapper>
      <MenuWrapper>
        <Menu ref={menu}>
          <li>
            <a href="/" title="Página inicial" className={actualPage.pathname === "/" ? "active" : ""}>
              Início
            </a>
          </li>
          {
            isLogged &&
            <li onClick={() => navigate("/conta")} className="mobile-option">
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
            <li onClick={() => navigate("/planos")} className="mobile-option">
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
            <li onClick={() => navigate("/enviar")} className="mobile-option">
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
          <li onClick={openSearch} className="mobile-option">
            <SearchIcon className="menu-icon" />
            <a href="#">Explorar</a>
          </li>
          {
            isLogged &&
            <li id="about-btn-mobile" onClick={() => navigate("/sobre")} className="mobile-option">
              <img src={About} alt="Ícone de sobre nós" />
              <a
                href="/sobre"
                title="Sobre nós"
                className={actualPage.pathname === "/sobre" ? "active" : ""}
                onClick={() => setActualPage({ ...actualPage, pageTitle: "Sobre nós" })}
              >
                Sobre
              </a>
            </li>
          }
          {
            isLogged === false &&
            <li onClick={() => navigate("/planos")} className="mobile-option">
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
            <li id="about-btn-mobile" onClick={() => navigate("/sobre")} className="mobile-option">
              <img src={About} alt="Ícone de sobre nós" />
              <a
                href="/sobre"
                title="Sobre nós"
                className={actualPage.pathname === "/sobre" ? "active" : ""}
                onClick={() => setActualPage({ ...actualPage, pageTitle: "Sobre nós" })}
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
              onClick={() => setActualPage({ ...actualPage, pageTitle: "Catálogo" })}
            >
              Catálogo
            </a>
          </li>
          <li>
            <a
              href="/leitor"
              title="Leitor"
              className={actualPage.pathname === "/leitor" ? "active" : ""}
              onClick={() => setActualPage({ ...actualPage, pageTitle: "Leitor" })}
            >
              Leitor
            </a>
          </li>
          <li>
            <a
              href="/quadrinista"
              title="Quadrinista"
              className={actualPage.pathname === "/quadrinista" ? "active" : ""}
              onClick={() => setActualPage({ ...actualPage, pageTitle: "Quadrinista" })}
            >
              Quadrinista
            </a>
          </li>
          <li>
            <a
              href="/comunidade"
              title="Comunidade"
              className={actualPage.pathname === "/comunidade" ? "active" : ""}
              onClick={() => setActualPage({ ...actualPage, pageTitle: "Comunidade" })}
            >
              Comunidade
            </a>
          </li>
          <li>
            <a
              href="/sobre"
              title="Sobre nós"
              className={actualPage.pathname === "/sobre" ? "active" : ""}
              onClick={() => setActualPage({ ...actualPage, pageTitle: "Sobre nós" })}
            >
              Sobre nós
            </a>
          </li>
          {
            isLogged === false &&
            <li onClick={login} className="mobile-option">
              <LoginIcon className="menu-icon" />
              <a href="#">Entrar</a>
            </li>
          }
          {
            isLogged === false &&
            <li className="mobile-option">
              <AppRegistrationIcon className="menu-icon" />
              <a href="#">Criar conta</a>
            </li>
          }
          {
            isLogged &&
            <li onClick={exit} className="mobile-option">
              <LogoutIcon className="menu-icon" />
              <a href="#" title="Sair">Sair</a>
            </li>
          }
        </Menu>
      </MenuWrapper>
    </Container>
  );
}