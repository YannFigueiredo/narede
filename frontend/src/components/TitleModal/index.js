import React, { useState, useEffect, useRef } from "react";
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

export default function TitleModal({
  cover,
  isModalOpen = false,
  setIsModalOpen,
}) {
  //const [modalOpen, setModalOpen] = useState(isModalOpen);
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
        <Header cover={cover}>
          <CloseButton>
            <CancelIcon id="close-button" onClick={closeModal} />
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
