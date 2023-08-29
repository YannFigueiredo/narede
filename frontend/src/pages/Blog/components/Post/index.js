import React from "react";
import { 
  Container,
  Header,
  Content,
  ButtonsWrapper 
} from "./styles";
import Button from "components/Button";

export default function Post({
  username,
  title,
  text,
  image
}) {
  return(
    <Container>
      <Header>
        <a href="#">{`@${username}`}</a>
        <Button
          text="Seguir"
          isUppercase
          variant="blue_alt"
          freeSize={false}
          width="content"
        />
      </Header>
      <Content>
        <h3>{title}</h3>
        <img src={image}/>
        <p>{text}</p>
      </Content>
      <ButtonsWrapper>
        <a href="#">Curtir</a>
        <a href="#">Comentar</a>
      </ButtonsWrapper>
    </Container>
  );
}