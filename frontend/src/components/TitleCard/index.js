import React, { useState } from "react";
import { Container, CoverWrapper, InfoWrapper, DetailsWrapper } from "./styles";
import TitleModal from "components/TitleModal";

export default function TitleCard({
  title,
  category,
  year, 
  cover
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <TitleModal
        cover={cover}
        isModalOpen={isModalOpen}
      />
    </Container>
  );
}