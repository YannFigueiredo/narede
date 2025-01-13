import React, { useEffect } from "react";
import MainSlide from "./components/MainSlide";
import MostPopular from "pages/Home/components/MostPopular";
import MostRecent from "pages/Home/components/MostRecent";
import Reviews from "./components/Reviews";
import TitleModal from "components/TitleModal";
import { Container, Content, Main, SubmitWrapper, Submit, SideLists } from "./styles";
import SubmitImage from "assets/images/submissao-img.png";
import star from "assets/icons/ranking.png";
import RankingArtists from "./components/RankingArtists";
import RankingReaders from "./components/RankingReaders";
import BannerPlans from "./components/BannerPlans";

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
      <Content>
        <Main>
          <MainSlide />
          <MostRecent title="Recomendações" />
          <MostRecent title="Mais recentes" />
          <MostRecent title="Continue lendo" />
          <BannerPlans />
        </Main>
        <SideLists>
          <MostPopular />
          <RankingArtists />
          <RankingReaders />
        </SideLists>
      </Content>
      <Reviews />
      <SubmitWrapper className="submit initial-fade">
        <Submit>
          <div>
            <img src={star} alt="Imagem de uma estrela" />
            <img src={star} alt="Imagem de uma estrela" />
            <img src={star} alt="Imagem de uma estrela" />
          </div>
          <h2>Submissão</h2>
          <div>
            <img src={star} alt="Imagem de uma estrela" />
            <img src={star} alt="Imagem de uma estrela" />
            <img src={star} alt="Imagem de uma estrela" />
          </div>
        </Submit>
        <img src={SubmitImage} alt="Imagem da seção de submissão" />
        <div className="bg"></div>
      </SubmitWrapper>
      <TitleModal />
    </Container>
  );
}