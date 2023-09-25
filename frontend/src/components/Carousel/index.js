import React, { useRef, useState, useEffect } from "react";
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

  const [windowSize, setWindowSize] = useState(global.window.innerWidth);

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

  useEffect(() => {
    global.window.addEventListener("resize", () => setWindowSize(global.window.innerWidth));

    return () => global.window.removeEventListener("resize", setWindowSize(global.window.innerWidth));
  }, [global.window.innerWidth]);

  useEffect(() => {
    const interval = setInterval(() => {
      if(
        cardsWrapper.current.scrollLeft === (cardsWrapper.current.scrollWidth - cardsWrapper.current.clientWidth)
        && cardsWrapper.current.scrollLeft !== 0
      ) {
        back();
      } else {
        next();
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
              author={card.author}
              variation={windowSize <= 768 ? "small" : windowSize <= 992 ? "medium" : "large"}
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