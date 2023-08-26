import React from "react";
import Carousel from "components/Carousel";
import { Container } from "components/Container/section";
import { titlesList } from "utils/mocks/titlesList";
import { TitleWrapper } from "./styles";

export default function MostRecent() {
  return(
    <Container>
      <TitleWrapper>
        <h2>Novidades</h2>
      </TitleWrapper>
      <Carousel cards={titlesList} />
    </Container>
  );
}