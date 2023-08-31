import React, { useState, useEffect, useRef } from "react";
import { 
  Container,
  ComicsWrapper ,
  TabsWrapper
} from "./styles";
import { titlesList } from "utils/mocks/titlesList";
import TitleCard from "components/TitleCard";

export default function MainSlide() {
  const [comics, setComics] = useState([]);
  const [tabActive, setTabActive] = useState(2);
  const slide = useRef(null);

  const moveSlide = () => {
    if(slide.current) {
      var firstElement = slide.current.firstElementChild;
      
      firstElement.style.transition = "margin-left linear 1s";
      firstElement.style.marginLeft = "25%";
      
      slide.current.appendChild(firstElement);
      firstElement.style.transition = "margin-left linear 1s";
      firstElement.style.marginLeft = "0";
    }
  };

  useEffect(() => {
    setComics(titlesList.slice(0, 5));
  }, []);

  return(
    <Container>
      <h2>Recomendações</h2>
      <ComicsWrapper ref={slide}>
        {
          comics.map((comic, key) => (
            <TitleCard
              key={key}
              id={comic.id}
              title={comic.title}
              description={comic.description}
              author={comic.author}
              cover={comic.cover} 
              withTitle={false}
              category={comic.category}
              year={comic.year}
              variation={key === 0 || key === 4 ? "small" : key === 1 || key === 3 ? "medium" : "large"}
            />
          ))
        }
      </ComicsWrapper>
      <TabsWrapper>
        {
          comics.map((_, key) => (
            <div 
              key={key} 
              className={key === tabActive ? "active" : ""}
              onClick={() => {
                setTabActive(key);
                moveSlide();
              }}
            ></div>
          ))
        }
      </TabsWrapper>
    </Container>
  );
}