import React from "react";
import { Container, CardsWrapper, Card, Details } from "./styles.js";
import TitleCard from "components/TitleCard";
import { titlesList } from "utils/mocks/titlesList";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function MostPopular() {
  return(
    <Container>
      <h2>Em alta</h2>
      <CardsWrapper>
        {
          titlesList.slice(0, 8).map((card, key) => (
            <Card key={key} title={card.title}>
              <span className="rank">{key+1}</span>
              <TitleCard 
                id={card.id}
                title={card.title}
                description={card.description}
                volumesNumber={card.volumesNumber}
                chaptersNumber={card.chaptersNumber}
                category={card.category}
                year={card.year}
                cover={card.cover}
                author={card.author}
                variation="very small"
                withTitle={false}
              />
              <Details>
                <h3>{card.title.slice(0,13)}</h3>
                <div>
                  <VisibilityIcon className="view-icon" />
                  <span>5,9k</span>
                </div>
              </Details>
            </Card>
          ))
        }
      </CardsWrapper>
    </Container>
  );
}