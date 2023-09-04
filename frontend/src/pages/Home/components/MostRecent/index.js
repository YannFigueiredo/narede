import React, { useState, useEffect } from "react";
import { Container } from "components/Container/section";
import { titlesList } from "utils/mocks/titlesList";
import { TitleWrapper, CardsWrapper } from "./styles";
import TitleCard from "components/TitleCard";

export default function MostRecent() {
  const [windowSize, setWindowSize] = useState(global.window.innerWidth);

  useEffect(() => {
    global.window.addEventListener("resize", () => setWindowSize(global.window.innerWidth));

    return () => global.window.removeEventListener("resize", setWindowSize(global.window.innerWidth));
  }, [global.window.innerWidth]);

  return(
    <Container>
      <TitleWrapper>
        <h2>Novidades</h2>
      </TitleWrapper>
      <CardsWrapper>
        {
          titlesList.slice(0, 9).map((card, key) => (
            <TitleCard 
              key={key}
              id={card.id}
              title={card.title}
              description={card.description}
              volumesNumber={card.volumesNumber}
              chaptersNumber={card.chaptersNumber}
              category={card.category}
              year={card.year}
              cover={card.cover}
              author={card.author}
              variation={windowSize <= 768 ? "small" : windowSize <= 992 ? "medium" : "large"}
            />
          ))
        }
      </CardsWrapper>
    </Container>
  );
}