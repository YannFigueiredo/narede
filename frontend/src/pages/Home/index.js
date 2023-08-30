import React from "react";
import { Container } from "../../components/Container/page";
import MainSlide from "./components/MainSlide";
import Intro from "components/Intro";
import MostPopular from "components/MostPopular";
import MostRecent from "components/MostRecent";
import TitleModal from "components/TitleModal";

export default function Home() {
  return(
    <Container>
      <Intro />
      <MainSlide />
      <MostRecent />
      <MostPopular />
      <TitleModal />
    </Container>
  );
}