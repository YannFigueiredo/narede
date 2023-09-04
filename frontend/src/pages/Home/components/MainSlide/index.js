import React, { useState, useEffect, useRef } from "react";
import { Container } from "components/Container/section";
import { 
  Main,
  ComicsWrapper ,
  TabsWrapper
} from "./styles";
import { titlesList } from "utils/mocks/titlesList";
import TitleCard from "components/TitleCard";

export default function MainSlide() {
  const [comics, setComics] = useState([]);
  const [tabActive, setTabActive] = useState(2);
  const [positions, setPositions] = useState([0, 1, 2, 3, 4]);
  const slide = useRef(null);

  const moveSlide = (index) => {
    if(slide.current) {
      var elements = slide.current.querySelectorAll(":scope > *");
      var element = elements[index];
      var middlePosition = Math.floor(elements.length/2) + 1;
      //var referenceElement = elements[middlePosition];
      
      //firstElement.style.transition = "margin-left linear 1s";
      //firstElement.style.marginLeft = "-100%";
      //slide.current.removeChild(referenceElement);
      
      slide.current.insertBefore(
        element, 
        index <= middlePosition ? 
          elements[middlePosition] : 
          index === 3 ? 
            elements[1] : 
            elements[middlePosition - 1]
      );

      //slide.current.insertBefore(referenceElement, elements[4]);
      //firstElement.style.transition = "margin-left linear 1s";
      //firstElement.style.marginLeft = "0";
      const newPositions = [...positions];
      newPositions.splice(index, 2);
      //newPositions.splice(4, 0);
      //newPositions.splice(middlePosition - (index <= middlePosition ? 0 : 1), 0, index);
      setPositions(newPositions);
    }
  };

  useEffect(() => {
    setComics(titlesList.slice(0, 5));
  }, []);

  return(
    <Container>
      <Main>
        <h2>Recomendações</h2>
        <ComicsWrapper ref={slide}>
          {
            comics.map((comic, key) => (
              <TitleCard
                className={
                  positions[key] === 0 || positions[key] === 4 ? 
                    "small" : positions[key] === 1 || positions[key] === 3 ? 
                      "medium" : "large"
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