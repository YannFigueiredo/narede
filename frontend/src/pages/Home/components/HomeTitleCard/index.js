import React, { useContext } from "react";
import { TitleContext } from "contexts/TitleContext";
import { Container, CoverWrapper, DetailsWrapper } from "./styles";

export default function HorizontalTitleCard({
  title,
  withTitle = false,
  variation,
  width,
  height
}) {
  const { setTitleValues, setIsModalOpen } = useContext(TitleContext);

  const openModal = () => {
    setTitleValues({
      id: title.id,
      title: title.title,
      description: title.description,
      cover: title.cover,
      category: title.category,
      author: title.author
    });
    setIsModalOpen(true);
  };

  return(
    <Container variation={variation} width={width} height={height}>
      {withTitle &&
        <DetailsWrapper>
          <h3>{title.title.slice(0, 17)}</h3>
        </DetailsWrapper>
      }
      <CoverWrapper variation={variation} onClick={openModal} className="cover">
        <img src={title.cover} alt="Capa da HQ" />
      </CoverWrapper>
    </Container>
  );
}