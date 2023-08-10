import React, { useContext } from "react";
import { TitleContext } from "contexts/TitleContext";
import { Container, CoverWrapper, InfoWrapper, DetailsWrapper } from "./styles";

export default function TitleCard({
  title,
  category,
  year, 
  cover
}) {
  const { setIsModalOpen } = useContext(TitleContext);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return(
    <Container>
      <CoverWrapper onClick={openModal}>
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