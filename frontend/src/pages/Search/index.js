import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "components/Container/page";
import { Main, ComicsWrapper } from "./styles";
import { titlesList } from "utils/mocks/titlesList";
import TitleCard from "components/TitleCard";
import TitleModal from "components/TitleModal";

export default function Search() {
  const [result, setResult] = useState([]);
  const [windowSize, setWindowSize] = useState(global.window.innerWidth);
  const { search } = useParams();

  const normalizeText = (text) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const checkDuplicates = (titles) => {
    const newList = [];
    let isDuplicate = false;

    titles.map(title => {
      newList.map(item => {
        if(item.id && item.id === title.id)
          isDuplicate = true;
      });

      if(isDuplicate === false)
        newList.push(title);
      
      isDuplicate = false;
    });

    return newList;
  };

  const searchResults = () => {
    let results = [];

    titlesList.map(title => {
      if(
        normalizeText(title.title.toLowerCase())
          .includes(
            normalizeText(search.toLowerCase())
          )
      ) {
        results.push(title);
      } 
      
      title.author.map(name => {
        if(
          normalizeText(name.toLowerCase())
            .includes(
              normalizeText(search.toLowerCase())
            )
        ) {
          results.push(title);
        }
      });
    });

    console.log("results antes de checar: ", results);
    setResult(checkDuplicates(results));
  };

  useEffect(() => searchResults(), []);

  useEffect(() => searchResults(), [global.window.location.pathname]);

  useEffect(() => {
    global.window.addEventListener("resize", () => setWindowSize(global.window.innerWidth));

    return () => global.window.removeEventListener("resize", () => setWindowSize(global.window.innerWidth));
  }, [global.window.innerWidth]);

  return(
    <Container>
      <TitleModal />
      <Main>
        {result.length === 0 &&
          <span>Nenhum resultado foi encontrado!</span>
        }
        {result.length > 0 &&
          <ComicsWrapper>
            {result.map((comic, key) => (
              <TitleCard
                key={key}
                id={comic.id}
                title={comic.title}
                category={comic.category}
                description={comic.description}
                author={comic.author}
                year={comic.year}
                cover={comic.cover}
                variation={windowSize <= 768 ? "small" : windowSize <= 992 ? "medium" : "large"}
              />
            ))}
          </ComicsWrapper>
        }
      </Main>
    </Container>
  );
}