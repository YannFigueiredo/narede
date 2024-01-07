import React, { useState, useEffect } from "react";
import { Container } from "components/Container/page";
import { Main, Selector, Filter, TitlesArea } from "./styles";
import { titlesList } from "utils/mocks/titlesList";
import TitleCard from "components/TitleCard";
import TitleModal from "components/TitleModal";
import Button from "components/Button";

export default function Categories() {
  const [ categories, setCategories ] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    setCategories([
      {
        name: "Todos",
        titles: titlesList
      },
      {
        name: "Aventura",
        titles: titlesList.filter(title => title.category === "Aventura")
      },
      {
        name: "Folclore",
        titles: titlesList.filter(title => title.category === "Folclore")
      },
      {
        name: "Romance",
        titles: titlesList.filter(title => title.category === "Romance")
      },
      {
        name: "Cultura",
        titles: titlesList.filter(title => title.category === "Cultura")
      },
      {
        name: "Comédia",
        titles: titlesList.filter(title => title.category === "Comédia")
      },
      {
        name: "Ação",
        titles: titlesList.filter(title => title.category === "Ação")
      }
    ]);
  }, []);

  return(
    <Container>
      <Main>
        <Selector active={activeCategory + 1}>
          {
            categories && categories.length > 0 && categories.map((category, key) => (
              <Button 
                key={key}
                text={category.name}
                onClick={() => setActiveCategory(key)}
                variant="tab"
              />
            ))
          }
        </Selector>
        <Filter id="mobile-selector" onChange={(e) => setActiveCategory(e.target.value)}>
          {
            categories && categories.length > 0 && categories.map((category, key) => (
              <option 
                key={key}
                value={key}
              >
                {category.name}
              </option>
            ))
          }
        </Filter>
        <Filter>
          <option>por popularidade</option>
          <option>por data</option>
          <option>por avaliação</option>
          <option>por ordem alfabética</option>
        </Filter>
        <TitlesArea>
          {
            categories && categories.length > 0 && categories[activeCategory].titles.map((title, key) => (
              <TitleCard 
                className="card"
                key={key}
                id={title.id}
                title={title.title}
                category={title.category}
                description={title.description}
                volumesNumber={title.volumesNumber}
                chaptersNumber={title.chaptersNumber}
                author={title.author}
                year={title.year}
                cover={title.cover}
                variation="small"
              />
            ))
          }
        </TitlesArea>
      </Main>
      <TitleModal />
    </Container>
  );
}