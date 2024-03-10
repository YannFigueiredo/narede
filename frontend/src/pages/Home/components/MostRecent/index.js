import React, { useEffect, useRef } from "react";
import { Container } from "components/Container/section";
import { titlesList } from "utils/mocks/titlesList";
import { TitleWrapper, CardsWrapper } from "./styles";
import TitleCard from "components/TitleCard";
import { Header } from "../header.js";

export default function MostRecent({ title }) {
  const cards = useRef(null);

  const verifyScreenPosition = () => {
    var show = 0.1;
    var screenHeight = global.window.innerHeight;
    var itemHeight = cards.current.offsetHeight;
    var itemTop = cards.current.getBoundingClientRect().top;
   
    if (itemTop <= screenHeight - (itemHeight * (show / 100))) {
      cards.current.classList.add("move-from-bottom");
    }
  };

  useEffect(() => {
    global.window.addEventListener("scroll", verifyScreenPosition);
    
    return () => global.window.removeEventListener("scroll", verifyScreenPosition);
  }, []);

  return(
    <Container>
      <TitleWrapper>
        <Header>
          <h2>{title}</h2>
        </Header>
      </TitleWrapper>
      <CardsWrapper ref={cards} className="initial-bottom">
        {
          titlesList.slice(0, 15).map((card, key) => (
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
              isFree={card.isFree}
              variation="small"
              withTitle={false}
            />
          ))
        }
      </CardsWrapper>
    </Container>
  );
}