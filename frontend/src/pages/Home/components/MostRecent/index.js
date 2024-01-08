import React from "react";
import { Container } from "components/Container/section";
import { titlesList } from "utils/mocks/titlesList";
import { TitleWrapper, CardsWrapper } from "./styles";
import TitleCard from "components/TitleCard";
import { Header } from "../header.js";

export default function MostRecent({ title }) {
  /*const [windowSize, setWindowSize] = useState(global.window.innerWidth);

  useEffect(() => {
    global.window.addEventListener("resize", () => setWindowSize(global.window.innerWidth));

    return () => global.window.removeEventListener("resize", setWindowSize(global.window.innerWidth));
  }, [global.window.innerWidth]);*/

  return(
    <Container>
      <TitleWrapper>
        <Header>
          <h2>{title}</h2>
        </Header>
      </TitleWrapper>
      <CardsWrapper>
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