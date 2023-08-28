import React from "react";
import { Container } from "./styles";

export default function Button({
  text,
  onClick,
  variant,
  freeSize = true,
  width
}) {
  return(
    <Container 
      onClick={onClick} 
      variant={variant} 
      width={freeSize ? "auto" : width}
    >
      {text}
    </Container>
  );
}