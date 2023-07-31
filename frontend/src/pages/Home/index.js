import React from "react";
import { Container } from "../../components/Container/page";
import Intro from "components/Intro";
import MostPopular from "components/MostPopular";
import MostRecent from "components/MostRecent";

export default function Home() {
  return(
    <Container>
      <Intro />
      <MostPopular />
      <MostRecent />
    </Container>
  );
}