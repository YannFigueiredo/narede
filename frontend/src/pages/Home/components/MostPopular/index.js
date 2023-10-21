import React from "react";
import Carousel from "components/Carousel";
import { Container } from "components/Container/section";
import { titlesList } from "utils/mocks/titlesList";
import { TitleWrapper } from "./styles";
import { Header } from "../header.js";

export default function MostPopular() {
  return(
    <Container>
      <TitleWrapper>
        <Header>
          <h2>Top: Quadrinhos mais populares</h2>
          <a href="/catalogo">ver lista completa</a>
        </Header>
      </TitleWrapper>
      <Carousel cards={titlesList} />
    </Container>
  );
}