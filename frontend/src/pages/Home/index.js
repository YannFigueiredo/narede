import React, { useEffect } from "react";
import { Container } from "../../components/Container/page";
import Intro from "components/Intro";
import MostPopular from "pages/Home/components/MostPopular";
import MostRecent from "pages/Home/components/MostRecent";
import Reviews from "./components/Reviews";
import TitleModal from "components/TitleModal";
import { Content, Main, SubmitWrapper } from "./styles";
import SubmitImage from "assets/images/submissao-img.png";
import SubmitText from "assets/images/submissao-texto.png";

export default function Home() {
  const verifyScreenPosition = () => {
    var show = 30;
    var items = global.document.querySelectorAll(".submit");
    var screenHeight = global.window.innerHeight;

    items.forEach(item => {
      var itemHeight = item.offsetHeight;
      var itemTop = item.getBoundingClientRect().top;
   
      if (itemTop <= screenHeight - (itemHeight * (show / 100))) {
        item.classList.add("fade-in");
      }
    });
  };

  useEffect(() => {
    global.window.addEventListener("scroll", verifyScreenPosition);
    
    return () => global.window.removeEventListener("scroll", verifyScreenPosition);
  }, []);

  return(
    <Container>
      <Intro />
      <Content>
        <Main>
          <MostRecent title="Recomendações" />
          <MostRecent title="Mais recentes" />
          <MostRecent title="Continue lendo" />
        </Main>
        <MostPopular />
      </Content>
      <Reviews />
      <SubmitWrapper className="submit">
        <img src={SubmitImage} alt="Imagem da seção de submissão" />
        <img src={SubmitText} alt="Texto da seção de submissão" />
      </SubmitWrapper>
      <TitleModal />
    </Container>
  );
}