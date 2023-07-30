import React from "react";
import { Container, CoverWrapper, InfoWrapper, DetailsWrapper } from "./styles";

export default function TitleCard({
  title,
  category,
  year, 
  cover
}) {
  return(
    <Container>
      <CoverWrapper>
        <img src={cover} alt="Capa da HQ" />
        <InfoWrapper>
          <span>{category}</span>
          <span>{year}</span>
        </InfoWrapper>
      </CoverWrapper>
      <DetailsWrapper>
        <h3>{title}</h3>
      </DetailsWrapper>
    </Container>
  );
}