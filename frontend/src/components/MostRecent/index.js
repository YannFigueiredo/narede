import React from "react";
import { Container } from "components/Container/section";
import { titlesList } from "utils/mocks/titlesList";
import { TitleWrapper, CardsWrapper } from "./styles";
import TitleCard from "components/TitleCard";

export default function MostRecent() {
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
              variation="large"
            />
          ))
        }
      </CardsWrapper>
    </Container>
  );
}