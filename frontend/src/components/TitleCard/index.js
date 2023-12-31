import React, { useContext } from "react";
import { TitleContext } from "contexts/TitleContext";
import { Container, CoverWrapper, InfoWrapper, DetailsWrapper } from "./styles";

export default function TitleCard({
  id,
  title,
  category,
  description,
  author,
  year, 
  cover,
  variation = "medium",
  withTitle = true,
  className
}) {
  const { setTitleValues, setIsModalOpen } = useContext(TitleContext);

  const openModal = () => {
    setTitleValues({
      id: id,
      title: title,
      description: description,
      cover: cover,
      category: category,
      author: author
    });
    setIsModalOpen(true);
  };

  return(
    <Container variation={variation} className={className}>
      <CoverWrapper variation={variation} onClick={openModal} className="cover">
        <img src={cover} alt="Capa da HQ" />
        {variation !== "very small" &&
          <InfoWrapper>
            <span>{category}</span>
            <span>{year}</span>
          </InfoWrapper>
        }
      </CoverWrapper>
      {withTitle &&
        <DetailsWrapper>
          <h3>{title}</h3>
        </DetailsWrapper>
      }
    </Container>
  );
}