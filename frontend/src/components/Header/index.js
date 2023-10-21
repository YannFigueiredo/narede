import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Container, 
  ImageWrapper, 
  MenuWrapper, 
  Menu,
  SessionManager 
} from "./styles";
import Logo from "assets/images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import Input from "components/Input";
import GenericUser from "assets/images/generic-user.png";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import BrushIcon from "@mui/icons-material/Brush";
import PostAddIcon from "@mui/icons-material/PostAdd";
import InfoIcon from "@mui/icons-material/Info";

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
    <Container variant={actualPage.pathname === "/" ? "home" : "others"}>
      {
        actualPage.pathname !== "/" &&
        <ImageWrapper>
          <a href="/"><img src={Logo} alt="Logo do site Nave HQ"/></a>
          <h1>{actualPage.pageTitle}</h1>
        </ImageWrapper>
      }
      {
        actualPage.pathname === "/" &&
        <MenuWrapper>
          <Menu id="main-menu" ref={menu} variant={actualPage.pathname === "/" ? "home" : "others"}>
            <li>
              <a href="/" title="Página inicial" className={actualPage.pathname === "/" ? "active" : ""}>
                <HomeIcon/>
              </a>
            </li>
            <li>
              <a 
                href="/catalogo" 
                title="Catálogo"
                className={actualPage.pathname === "/catalogo" ? "active" : ""}
                onClick={() => setActualPage({...actualPage, pageTitle: "Catálogo"})}
              >
                <LibraryBooksIcon />
              </a>
            </li>
            <li>
              <a 
                href="/leitor" 
                title="Leitor"
                className={actualPage.pathname === "/leitor" ? "active" : ""}
                onClick={() => setActualPage({...actualPage, pageTitle: "Leitor"})}
              >
                <ImportContactsIcon />
              </a>
            </li>
            <li>
              <a 
                href="/produtor" 
                title="Produtor"
                className={actualPage.pathname === "/produtor" ? "active" : ""}
                onClick={() => setActualPage({...actualPage, pageTitle: "Produtor"})}  
              >
                <BrushIcon />
              </a>
            </li>
            <li>
              <a 
                href="/blog" 
                title="Blog"
                className={actualPage.pathname === "/blog" ? "active" : ""}
                onClick={() => setActualPage({...actualPage, pageTitle: "Blog"})}
              >
                <PostAddIcon />
              </a>
            </li>
            <li>
              <a 
                href="/sobre" 
                title="Sobre nós"
                className={actualPage.pathname === "/sobre" ? "active" : ""}
                onClick={() => setActualPage({...actualPage, pageTitle: "Sobre nós"})}
              >
                <InfoIcon />
              </a>
            </li>
            <CancelIcon id="menu-close" onClick={closeMenu} />
          </Menu>
          <MenuIcon id="menu-open" onClick={openMenu} />
        </MenuWrapper>
      }
      <Input 
        className="search-input-header"
        width="auto"
        isSearch
        placeholder="Insira título ou quadrinista"
        onChange={(e) => setSearch(e.target.value)}
        onClick={() => runSearch()}
        onKeyDown={(e) => {if(e.key === "Enter") runSearch();}}
      />
      <SessionManager>
        {
          isLogged &&
          <Menu id="logged-container" variant={actualPage.pathname === "/" ? "home" : "others"}>
            <li>
              <a href="#">fulanodetal</a>
              <img src={GenericUser} alt="Foto de perfil" />
            </li>
            <li><a href="#" onClick={exit}>Sair</a></li>
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
    </Container>
  );
}