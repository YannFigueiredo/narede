import React from "react";
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
      <TitleModal />
      <SubmitWrapper>
        <img src={SubmitImage} alt="Imagem da seção de submissão" />
        <img src={SubmitText} alt="Texto da seção de submissão" />
      </SubmitWrapper>
    </Container>
  );
}