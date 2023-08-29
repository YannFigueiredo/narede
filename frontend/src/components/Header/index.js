import React, { useState, useEffect, useRef } from "react";
import { Container, ImageWrapper, MenuWrapper, Menu } from "./styles";
import Logo from "assets/images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import LoginIcon from "@mui/icons-material/Login";

export default function Header() {
  const menu = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    menu.current.style.display = "flex";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    menu.current.style.display = "none";
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

  return(
    <Container>
      <ImageWrapper href="/">
        <img src={Logo} alt="Logo do site Nave HQ"/>
      </ImageWrapper>
      <MenuWrapper>
        <Menu ref={menu}>
          <li><a href="/biblioteca">Biblioteca</a></li>
          <li><a href="/leitor">Leitor</a></li>
          <li><a href="/produtor">Produtor</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Sobre</a></li>
          <CancelIcon id="menu-close" onClick={closeMenu} />
        </Menu>
        <MenuIcon id="menu-open" onClick={openMenu} />
        <LoginIcon />
      </MenuWrapper>
    </Container>
  );
}