import React from "react";
import { Container } from "./styles";

export default function Button({
  text,
  onClick,
  background,
  color
}) {
  return(
    <Container onClick={onClick} background={background} color={color}>
      {text}
    </Container>
  );
}