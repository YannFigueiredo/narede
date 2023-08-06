import React from "react";
import { Container, CardsWrapper } from "./styles";
import TitleCard from "components/TitleCard";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function Carousel({
  cards
}) {
  return(
    <Container>
      <CardsWrapper>
        <div id="back-btn" >
          <ArrowCircleLeftIcon />
        </div>
        {
          cards.map((card, key) => 
            <TitleCard 
              key={key}
              title={card.title}
              category={card.category}
              year={card.year}
              cover={card.cover}
            />
          )
        }
        <div id="next-btn">
          <ArrowCircleRightIcon />
        </div>
      </CardsWrapper>
    </Container>
  ); 
}