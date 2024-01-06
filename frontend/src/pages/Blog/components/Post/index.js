import React from "react";
import { 
  Container,
  Header,
  Content,
  ButtonsWrapper 
} from "./styles";
import PictureProfile from "assets/images/generic-user.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TextsmsIcon from "@mui/icons-material/Textsms";

export default function Post({
  username,
  text,
  image
}) {
  return(
    <Container>
      <Header>
        <img src={PictureProfile} alt="Foto de perfil" />
        <a href="#">{`@${username}`}</a>
      </Header>
      <Content>
        <img src={image}/>
        <p>{text}</p>
      </Content>
      <ButtonsWrapper>
        <FavoriteIcon className="post-btn" />
        <TextsmsIcon className="post-btn" />
      </ButtonsWrapper>
    </Container>
  );
}