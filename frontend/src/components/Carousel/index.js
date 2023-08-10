import React, { useRef } from "react";
import { Container, CardsWrapper } from "./styles";
import TitleCard from "components/TitleCard";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function Carousel({
  cards
}) {
  const backBtn = useRef(null);
  const nextBtn = useRef(null);
  const cardsWrapper = useRef(null);

  const back = () => {
    const scrollPosition = cardsWrapper.current.scrollLeft - 400;
    cardsWrapper.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  const next = () => {
    const scrollPosition = cardsWrapper.current.scrollLeft + 400;
    cardsWrapper.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  return(
    <Container>
      <CardsWrapper ref={cardsWrapper} >
        <div id="back-btn" >
          <ArrowCircleLeftIcon ref={backBtn} onClick={back} />
        </div>
        {
          cards.map((card, key) => 
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
              views={card.views}
            />
          )
        }
        <div id="next-btn">
          <ArrowCircleRightIcon ref={nextBtn} onClick={next} />
        </div>
      </CardsWrapper>
    </Container>
  ); 
}