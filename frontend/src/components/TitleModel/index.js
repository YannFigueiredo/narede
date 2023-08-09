import React, { useEffect } from "react";
import { 
  Container,
  CloseButton, 
  Main,
  Header, 
  DetailsWrapper,
  TitleWrapper,
  InfosWrapper, 
  InfoWrapper, 
  Content, 
  Description, 
  ButtonWrapper,
  ListWrapper, 
  HeaderList, 
  List  
} from "./styles";
import CancelIcon from "@mui/icons-material/Cancel";

export default function TitleModel({
  cover
}) {
  useEffect(() => {
    global.document.body.style.overflow = "hidden";
  }, []);

  return(
    <Container>
      <Main>        
        <Header cover={cover}>
          <CloseButton>
            <CancelIcon id="close-button" />
          </CloseButton>
          <DetailsWrapper>
            <TitleWrapper>
              <span>categoria</span>
              <h3>Título</h3>
            </TitleWrapper>
            <InfosWrapper>
              <InfoWrapper>
                <span>1 volume(s)</span>
              </InfoWrapper>
              <InfoWrapper>
                <span>1 capítulo(s)</span>
              </InfoWrapper>
              <InfoWrapper>
                <span>views</span>
              </InfoWrapper>
            </InfosWrapper>
          </DetailsWrapper>
        </Header>
        <Content>
          <Description>
            <ButtonWrapper>
              <button>salvar na lista de leitura</button>
            </ButtonWrapper>
            <span>hq paraense muito legal</span>
          </Description>
          <ListWrapper>
            <HeaderList>
              <select>
                <option>volume</option>
              </select>
              <span>Capítulos</span>
            </HeaderList>
            <List>
              <span>capítulo x</span>
            </List>
          </ListWrapper>
        </Content>
      </Main>
    </Container>
  );
}
