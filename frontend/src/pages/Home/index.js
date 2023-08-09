import React from "react";
import { Container } from "../../components/Container/page";
import Intro from "components/Intro";
import MostPopular from "components/MostPopular";
import MostRecent from "components/MostRecent";
import TitleModel from "components/TitleModel";
import image from "assets/covers/01-acai-pesado.png";

export default function Home() {
  return(
    <Container>
      <Intro />
      <MostPopular />
      <MostRecent />
      <TitleModel cover={image} />
    </Container>
  );
}