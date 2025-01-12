import React from "react";
import { Container, CardsWrapper, Card, Details } from "./styles.js";
import artist1 from "assets/images/photo-profile8.jpeg";
import artist2 from "assets/images/photo-profile9.jpeg";
import artist3 from "assets/images/photo-profile10.jpeg";
import artist4 from "assets/images/photo-profile11.jpeg";
import artist5 from "assets/images/photo-profile12.jpeg";

export default function RankingReaders() {
  return(
    <Container>
      <h2>Top Leitores</h2>
      <CardsWrapper>
        <Card>
          <span className="rank">1</span>
          <img src={artist1} alt="Artista 1" />
          <Details>
            <h3>Marcus Santiago</h3>
          </Details>
        </Card>
        <Card>
          <span className="rank">2</span>
          <img src={artist2} alt="Artista 2" />
          <Details>
            <h3>Matthew Murdock</h3>
          </Details>
        </Card>
        <Card>
          <span className="rank">3</span>
          <img src={artist3} alt="Artista 3" />
          <Details>
            <h3>Walter White</h3>
          </Details>
        </Card>
        <Card>
          <span className="rank">4</span>
          <img src={artist4} alt="Artista 4" />
          <Details>
            <h3>Antônio Fagundes</h3>
          </Details>
        </Card>
        <Card>
          <span className="rank">5</span>
          <img src={artist5} alt="Artista 5" />
          <Details>
            <h3>Ivan Neves</h3>
          </Details>
        </Card>
      </CardsWrapper>
    </Container>
  );
}