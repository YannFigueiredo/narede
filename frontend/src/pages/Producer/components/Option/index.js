import React from "react";
import { Container, Content } from "./styles";

export default function Option({
  cover,
  title
}) {
  return(
    <Container>
      <Content>
        <div>
          <img src={cover} alt="Capa" />
        </div>
      </Content>
      <span>{title}</span>
    </Container>
  );
}