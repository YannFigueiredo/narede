import React from "react";
import { 
  Container,
  Header,
  Identifier,
  Title,
  Description 
} from "./styles";

export default function DescriptionCard({
  title,
  variant = "left",
  text,
  number
}) {
  return(
    <Container>
      <Header variant={variant}>
        <Identifier>{number}</Identifier>
        <Title>{title}</Title>
      </Header>
      <Description>
        {text}
      </Description>
    </Container>
  );
}