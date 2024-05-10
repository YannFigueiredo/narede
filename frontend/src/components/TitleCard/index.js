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
  className,
  isFree
}) {
  const { setTitleValues, setIsModalOpen } = useContext(TitleContext);

  const openModal = () => {
    setTitleValues({
      id: id,
      title: title,
      description: description,
      cover: cover,
      category: category,
      author: author,
      isFree: isFree
    });
    setIsModalOpen(true);
  };

  return(
    <Container variation={variation} className={className} title={title}>
      {withTitle &&
        <DetailsWrapper>
          <h3>{title.slice(0, 17)}</h3>
        </DetailsWrapper>
      }
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
        <DetailsWrapper className="author-details">
          <h3>{author.length > 1 ? "vários" : author[0]}</h3>
        </DetailsWrapper>
      }
    </Container>
  );
}