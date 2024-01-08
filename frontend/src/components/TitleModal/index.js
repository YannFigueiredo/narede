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
  List,
  Label
} from "./styles";
import CancelIcon from "@mui/icons-material/Cancel";
import acaiIcon from "assets/icons/acai.png";
import OpenIcon from "assets/icons/cadeado-desbloqueado.png";
import CloseIcon from "assets/icons/cadeado-trancado.png";

export default function TitleModal() {
  const { titleValues, isModalOpen, setIsModalOpen } = useContext(TitleContext);
  const [chaptersList, setChaptersList] = useState([]);
  const modal = useRef(null);
  const [isLogged, setIsLogged] = useState();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  /*const addFavorite = () => {
    const favorites = JSON.parse(global.localStorage.getItem("favorites")) || [];

    favorites.push(titleValues);

    global.localStorage.setItem("favorites", JSON.stringify(favorites));
  };*/
  useEffect(() => setIsLogged(global.localStorage.getItem("logged") === "true" ? true : false), []);
  
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
                } - 100 páginas - 45 visualizações - 15 likes - 3 comentários - 10 favoritações
              </h4>
            </TitleWrapper>
            <Label>{titleValues.isFree}</Label>
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
            <a
              href={
                titleValues.isFree === "Grátis" || isLogged ? `/quadrinho/${titleValues.id}/1` : "#"
              }
              className={
                titleValues.isFree === "Grátis" || isLogged ? "" : "blocked-item"
              }
            >
              Ler agora
            </a>
            <div>
              {
                titleValues.isFree !== "Grátis" &&
                <a href="/planos">{titleValues.isFree === "Compra" ? "Comprar" : "Assinar"}</a>
              }
              <a href="#">Apoie o autor</a>
              <a href="/quadrinista">Perfil do autor</a>
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
                    {
                      (titleValues.isFree === "Grátis" || isLogged) &&
                      <img 
                        src={OpenIcon} 
                        alt="Ícone de cadeado aberto" 
                        className="list-item-icon" 
                      />
                    }
                    {
                      (titleValues.isFree !== "Grátis" && !isLogged) &&
                      <img 
                        src={CloseIcon} 
                        alt="Ícone de cadeado fechado" 
                        className="list-item-icon" 
                      />
                    }
                    <a 
                      href={
                        titleValues.isFree === "Grátis" || isLogged ? `/quadrinho/${titleValues.id}/${key + 1}` : "#"
                      }
                    >{chapter.name}</a>
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
