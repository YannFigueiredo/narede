import React, { useEffect, useRef } from "react";
import { Container, ImageWrapper } from "./styles";
import Logo from "assets/images/logo.png";

export default function Intro() {
  const imageWrapper = useRef(null);
  const imageSpan = useRef(null);

  const verifyScreenPosition = () => {
    var show = 50;
    var imageWrapperHeight = imageWrapper.current.offsetHeight;
    var imageSpanHeight = imageSpan.current.offsetHeight;
    var imageWrapperTop = imageWrapper.current.getBoundingClientRect().top;
    var imageSpanTop = imageSpan.current.getBoundingClientRect().top; 
    var screenHeight = global.window.innerHeight;

    if (imageWrapperTop <= screenHeight - (imageWrapperHeight * (show / 100))) {
      imageWrapper.current.classList.add("move-from-left");
    } else {
      imageSpan.current.classList.remove("move-from-left");
    }

    if (imageSpanTop <= screenHeight - (imageSpanHeight * (show / 100))) {
      imageSpan.current.classList.add("move-from-right");
    } else {
      imageSpan.current.classList.remove("move-from-right");
    }
  };

  useEffect(() => {
    global.window.addEventListener("scroll", verifyScreenPosition);
    
    return () => global.window.removeEventListener("scroll", verifyScreenPosition);
  }, []);

  return(
    <Container>
      <ImageWrapper ref={imageWrapper}>
        <img src={Logo} alt="Logo do site 'Na rede' na seção principal da página inicial" />
      </ImageWrapper>
      <span ref={imageSpan}>Pescando no rio da criatividade</span>
    </Container>
  );
}