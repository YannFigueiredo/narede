import React, { useState } from "react";
import { 
  Container,
  Header,
  Content,
  ButtonsWrapper 
} from "./styles";
import PictureProfile from "assets/images/generic-user.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TextsmsIcon from "@mui/icons-material/Textsms";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";

export default function Post({
  username,
  text,
  image,
  urlPhoto
}) {
  const [textHidden, setTextHidden] = useState(
    text.length > 200 ? true : false
  );

  return(
    <Container>
      <Header>
        <div>
          <img src={urlPhoto ? urlPhoto : PictureProfile} alt="Foto de perfil" />
        </div>
        <a href="#">{`@${username}`}</a>
      </Header>
      <Content>
        <img src={image}/>
        <p>
          {
            textHidden ? text.slice(0, 200) + "..." : text
          }
        </p>
        {
          text.length > 200 &&
          <span 
            className="see-more-btn"
            onClick={() => setTextHidden((prevState) => !prevState)}
          >
            {
              textHidden ? "Ler mais..." : "Ler menos..."
            }
          </span>
        }
      </Content>
      <ButtonsWrapper>
        <FavoriteIcon className="post-btn" />
        <TextsmsIcon className="post-btn" />
        <ScreenShareIcon className="post-btn" />
      </ButtonsWrapper>
    </Container>
  );
}