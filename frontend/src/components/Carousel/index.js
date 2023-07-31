import React from "react";
import { Container, CardsWrapper } from "./styles";
import TitleCard from "components/TitleCard";

export default function Carousel({
  cards
}) {
  return(
    <Container>
      <CardsWrapper>
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
      </CardsWrapper>
    </Container>
  ); 
}