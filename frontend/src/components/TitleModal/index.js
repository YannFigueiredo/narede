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
  AssessmentsWrapper,
  Content, 
  ButtonsWrapper,
  Description, 
  ListWrapper, 
  List
} from "./styles";
import CancelIcon from "@mui/icons-material/Cancel";
import acaiIcon from "assets/icons/acai.png";

export default function TitleModal() {
  const { titleValues, isModalOpen, setIsModalOpen } = useContext(TitleContext);
  const [chaptersList, setChaptersList] = useState([]);
  const modal = useRef(null);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  /*const addFavorite = () => {
    const favorites = JSON.parse(global.localStorage.getItem("favorites")) || [];

    favorites.push(titleValues);

    global.localStorage.setItem("favorites", JSON.stringify(favorites));
  };*/

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
                autor(es): {
                  titleValues.author && titleValues.author.map((author, key) => {
                    if(key >= titleValues.author.length - 1) {
                      return author;
                    } else {
                      return author + " | ";
                    }
                  })
                } - @autor - x páginas - x visualizações - x likes - x comentários - x favoritações
              </h4>
            </TitleWrapper>
            <AssessmentsWrapper>
              <span>Avaliação:</span>
              <div>
                <img src={acaiIcon} />
                <img src={acaiIcon} />
                <img src={acaiIcon} />
              </div>
            </AssessmentsWrapper>
          </DetailsWrapper>
        </Header>
        <Content>
          <ButtonsWrapper>
            <a>Ler agora</a>
            <div>
              <a href="#">Apoie o autor</a>
              <a href="#">Perfil do autor</a>
              <a href="#">Salvar</a>
              <a href="#">Compatilhar</a>
            </div>
          </ButtonsWrapper>
          <Description>
            <h3>Sinopse</h3>
            <span>{titleValues.description}</span>
          </Description>
          <ListWrapper>
            <List>
              {
                chaptersList && chaptersList.length > 0 ? chaptersList[0].chapters.map((chapter, key) => (
                  <div className="list-item" key={key}>
                    <div className="list-item-photo"></div>
                    <a href={`/quadrinho/${titleValues.id}/${key + 1}`}>{chapter.name}</a>
                  </div>
                )) : (<span>Nenhum capítulo encontrado</span>)
              }
            </List>
          </ListWrapper>
        </Content>
      </Main>
    </Container>
  );
}
