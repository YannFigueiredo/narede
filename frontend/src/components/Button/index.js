import React from "react";
import { Container } from "./styles";

export default function Button({
  text,
  onClick,
  variant,
  freeSize = true,
  width,
  isUppercase = false
}) {
  return(
    <Container 
      onClick={onClick} 
      variant={variant} 
      width={freeSize ? "auto" : width}
      isUppercase={isUppercase}
    >
      {text}
    </Container>
  );
}