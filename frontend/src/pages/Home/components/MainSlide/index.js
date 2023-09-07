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

export default function MainSlide() {
  const [comics, setComics] = useState([]);
  const [tabActive, setTabActive] = useState(2);
  const slide = useRef(null);

  const moveSlide = (index) => {
    let translateValue = 50/-index;
    slide.current.style.transition = "all linear .4s";
    slide.current.style.transform = `translateX(${translateValue}%)`;
  };

  useEffect(() => {
    setComics(titlesList.slice(0, 5));
  }, []);

  return(
    <Container>
      <Main>
        <h2>Recomendações</h2>
        <SlideContainer>
          <div className="slide-side left-side"></div>
          <div className="slide-side right-side"></div>
          <ComicsWrapper ref={slide}>
            {
              comics.map((comic, key) => (
                <TitleCard
                  className={
                    "large"
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
                onClick={() => {
                  setTabActive(key);
                  moveSlide(key);
                }}
              ></div>
            ))
          }
        </TabsWrapper>
      </Main>
    </Container>
  );
}