import React from "react";
import { Container } from "components/Container/page";
import Infos from "./components/Infos";
import Option from "./components/Option";
import { Main } from "./styles";

export default function Producer() {
  return(
    <Container>
      <Main>
        <Infos />
        <Option title="Obras" />
        <Option title="Ilustrações" />
        <Option title="Blog" />
      </Main>
    </Container>
  );
}