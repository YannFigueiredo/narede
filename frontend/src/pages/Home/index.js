import React from "react";
import { Container } from "../../components/Container/page";
import Intro from "components/Intro";
import MostPopular from "pages/Home/components/MostPopular";
import MostRecent from "pages/Home/components/MostRecent";
import TitleModal from "components/TitleModal";

export default function Home() {
  return(
    <Container>
      <Intro />
      <MostRecent title="Recomendações" />
      <MostRecent title="Mais recentes" />
      <MostPopular />
      <TitleModal />
    </Container>
  );
}