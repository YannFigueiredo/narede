import React from "react";
import { 
  Container, 
  Main,
  Header, 
  InfosWrapper, 
  InfoWrapper, 
  Content, 
  Description, 
  ListWrapper, 
  HeaderList, 
  List  
} from "./styles";

export default function TitleModel() {
  return(
    <Container>
      <Main>        
        <Header>
          <h3>Título</h3>
          <InfosWrapper>
            <InfoWrapper>
              <span>volumes</span>
            </InfoWrapper>
            <InfoWrapper>
              <span>capítulos</span>
            </InfoWrapper>
            <InfoWrapper>
              <span>views</span>
            </InfoWrapper>
          </InfosWrapper>
        </Header>
        <Content>
          <Description>
            <span>descrição</span>
            <span>salvar na lista de leitura</span>
          </Description>
          <ListWrapper>
            <HeaderList>
              <h4>Capítulos</h4>
              <span>selecionar volumes</span>
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
