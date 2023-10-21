import React, { useState, useEffect, useRef } from "react";
import { Container } from "components/Container/section";
import { 
  Main,
  SlideContainer,
  ComicsWrapper ,
  TabsWrapper
} from "./styles";
import { titlesList } from "utils/mocks/titlesList";
import TitleCard from "components/TitleCard";
import { Header } from "../header.js";

export default function MainSlide() {
  const [comics, setComics] = useState([]);
  const [tabActive, setTabActive] = useState(2);
  const slide = useRef(null);

  const moveSlide = (index) => {
    if(slide.current) {
      let translateValue = index === 0 ? 170*2 : 
        index === 1 ? 160*1 : 
          index === 3 ? -160*1 :
            index === 4 ? -170*2 : 0;
      slide.current.style.transition = "all linear .3s";
      slide.current.style.transform = `translateX(${translateValue}px)`;
    }
  };

  useEffect(() => {
    setComics(titlesList.slice(0, 5));

    const interval = setInterval(() => {
      setTabActive((prevTabActive) => (prevTabActive !== 4 ? prevTabActive + 1 : 0));
    }, 3000);
  
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => moveSlide(tabActive), [tabActive]);

  return(
    <Container>
      <Main>
        <Header>
          <h2>Recomendações</h2>
          <a href="/catalogo">ver lista completa</a>
        </Header>
        <SlideContainer>
          <div className="slide-side left-side"></div>
          <div className="slide-side right-side"></div>
          <ComicsWrapper ref={slide}>
            {
              comics.map((comic, key) => (
                <TitleCard
                  className={
                    "medium"
                  }
                  key={key}
                  id={comic.id}
                  title={comic.title}
                  description={comic.description}
                  author={comic.author}
                  cover={comic.cover} 
                  withTitle={false}
                  category={comic.category}
                  year={comic.year}
                />
              ))
            }
            {
              comics.map((comic, key) => (
                <TitleCard
                  className={
                    key === tabActive ? "large" : "medium"
                  }
                  key={key}
                  id={comic.id}
                  title={comic.title}
                  description={comic.description}
                  author={comic.author}
                  cover={comic.cover} 
                  withTitle={false}
                  category={comic.category}
                  year={comic.year}
                />
              ))
            }
            {
              comics.map((comic, key) => (
                <TitleCard
                  className={
                    "medium"
                  }
                  key={key}
                  id={comic.id}
                  title={comic.title}
                  description={comic.description}
                  author={comic.author}
                  cover={comic.cover} 
                  withTitle={false}
                  category={comic.category}
                  year={comic.year}
                />
              ))
            }
          </ComicsWrapper>
        </SlideContainer>
        <TabsWrapper>
          {
            comics.map((_, key) => (
              <div 
                key={key} 
                className={key === tabActive ? "active" : ""}
                onClick={() => setTabActive(key)}
              ></div>
            ))
          }
        </TabsWrapper>
      </Main>
    </Container>
  );
}