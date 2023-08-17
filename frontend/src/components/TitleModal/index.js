import React, { useContext, useState, useEffect, useRef } from "react";
import { TitleContext } from "contexts/TitleContext";
import { hqsList } from "utils/mocks/hqsList";
import { 
  Container,
  CloseButton, 
  Main,
  Header, 
  DetailsWrapper,
  TitleWrapper,
  Content, 
  Description, 
  ListWrapper, 
  HeaderList, 
  List  
} from "./styles";
import CancelIcon from "@mui/icons-material/Cancel";

export default function TitleModal() {
  const { titleValues, isModalOpen, setIsModalOpen } = useContext(TitleContext);
  const [chaptersList, setChaptersList] = useState([]);
  const modal = useRef(null);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if(isModalOpen) {
      global.document.body.style.overflow = "hidden";
      global.document.documentElement.style.overflow = "hidden";
      modal.current.style.display = "flex";

      setChaptersList(hqsList.filter(hq => hq.id === titleValues.id));
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
              <h4>
                uma obra de: {
                  titleValues.author.map((author, key) => {
                    if(key >= titleValues.author.length - 1) {
                      return author;
                    } else {
                      return author + " | ";
                    }
                  })
                }
              </h4>
            </TitleWrapper>
          </DetailsWrapper>
        </Header>
        <Content>
          <Description>
            <span>{titleValues.description}</span>
          </Description>
          <ListWrapper>
            <HeaderList>
              <span>Capítulos</span>
            </HeaderList>
            <List>
              {
                chaptersList.length > 0 ? chaptersList[0].chapters.map((chapter, key) => (
                  <a key={key} href={`/quadrinho/${titleValues.id}/${key + 1}`}>{chapter.name}</a>
                )) : (<span>Nenhum capítulo encontrado</span>)
              }
            </List>
          </ListWrapper>
        </Content>
      </Main>
    </Container>
  );
}
