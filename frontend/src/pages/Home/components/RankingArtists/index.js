import React from "react";
import { Container, CardsWrapper, Card, Details } from "./styles.js";
import artist1 from "assets/images/photo-profile3.jpg";
import artist2 from "assets/images/photo-profile4.jpg";
import artist3 from "assets/images/photo-profile5.jpg";
import artist4 from "assets/images/photo-profile6.jpeg";
import artist5 from "assets/images/photo-profile7.jpeg";

export default function RankingArtists() {
  return(
    <Container>
      <h2>Ranking dos Artistas</h2>
      <CardsWrapper>
        <Card>
          <span className="rank">1</span>
          <img src={artist1} alt="Artista 1" />
          <Details>
            <h3>Thiago Tavares</h3>
          </Details>
        </Card>
        <Card>
          <span className="rank">2</span>
          <img src={artist2} alt="Artista 2" />
          <Details>
            <h3>Ana Dantas</h3>
          </Details>
        </Card>
        <Card>
          <span className="rank">3</span>
          <img src={artist3} alt="Artista 3" />
          <Details>
            <h3>Ádson Silva</h3>
          </Details>
        </Card>
        <Card>
          <span className="rank">4</span>
          <img src={artist4} alt="Artista 4" />
          <Details>
            <h3>Joel Cavalcante</h3>
          </Details>
        </Card>
        <Card>
          <span className="rank">5</span>
          <img src={artist5} alt="Artista 5" />
          <Details>
            <h3>Rayssa Antunes</h3>
          </Details>
        </Card>
      </CardsWrapper>
    </Container>
  );
}