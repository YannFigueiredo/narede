import React from "react";
import { Container, Info } from "./styles";
import Button from "components/Button";
import GenericPicture from "assets/images/generic-user.png";

export default function ProducerCard({
  username
}) {
  return(
    <Container>
      <img src={GenericPicture} alt="Foto de perfil do produtor" />
      <Info>
        <span>{`@${username}`}</span>
      </Info>
      <Button 
        id="follow-btn"
        text="Seguir"
        variant="blue_alt"
        freeSize={false}
        width="content"
      />
    </Container>
  );
}