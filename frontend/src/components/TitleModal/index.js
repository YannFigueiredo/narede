import React, { useContext, useEffect, useRef } from "react";
import { TitleContext } from "contexts/TitleContext";
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

export default function TitleModal() {
  const { titleValues, isModalOpen, setIsModalOpen } = useContext(TitleContext);
  const modal = useRef(null);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if(isModalOpen) {
      global.document.body.style.overflow = "hidden";
      global.document.documentElement.style.overflow = "hidden";
      modal.current.style.display = "flex";
    } else {
      global.document.body.style.overflow = "auto";
      global.document.documentElement.style.overflow = "auto";
      modal.current.style.display = "none";
    }
  }, [isModalOpen]);

  return(
    <Container ref={modal}>
      <Main>        
        <Header cover={titleValues.cover}>
          <CloseButton>
            <CancelIcon id="close-button" onClick={closeModal} />
          </CloseButton>
          <DetailsWrapper>
            <TitleWrapper>
              <span>{titleValues.category}</span>
              <h3>{titleValues.title}</h3>
              <h4>uma obra de: {titleValues.author.map(author => author + " | ")}</h4>
            </TitleWrapper>
            <InfosWrapper>
              <InfoWrapper>
                <span>{titleValues.volumesNumber} volume(s)</span>
              </InfoWrapper>
              <InfoWrapper>
                <span>{titleValues.chaptersNumber} capítulo(s)</span>
              </InfoWrapper>
            </InfosWrapper>
          </DetailsWrapper>
        </Header>
        <Content>
          <Description>
            <ButtonWrapper>
              <button>salvar na lista de leitura</button>
            </ButtonWrapper>
            <span>{titleValues.description}</span>
          </Description>
          <ListWrapper>
            <HeaderList>
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
