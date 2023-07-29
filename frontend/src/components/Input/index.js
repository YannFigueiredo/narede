import React from "react";
import { Container, InputWrapper } from "./styles";

export default function Input({
  width,
  placeholder = ""
}) {
  return(
    <Container width={width} tabIndex="0">
      <InputWrapper 
        placeholder={placeholder}
      />
    </Container>
  );
}