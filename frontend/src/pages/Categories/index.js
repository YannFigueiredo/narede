import React, { useState, useEffect } from "react";
import { Container } from "components/Container/page";
import { Main, Selector, TitlesArea } from "./styles";
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
    console.log(categories);
  }, []);

  return(
    <Container>
      <Main>
        <Selector>
          {
            categories && categories.length > 0 && categories.map((category, key) => (
              <Button 
                key={key}
                text={category.name}
                onClick={() => setActiveCategory(key)}
              />
            ))
          }
        </Selector>
        <TitlesArea>
          {
            categories && categories.length > 0 && categories[activeCategory].titles.map((title, key) => (
              <TitleCard 
                key={key}
                id={title.id}
                category={title.category}
                description={title.description}
                volumesNumber={title.volumesNumber}
                chaptersNumber={title.chaptersNumber}
                author={title.author}
                year={title.year}
                cover={title.cover}
              />
            ))
          }
        </TitlesArea>
      </Main>
      <TitleModal />
    </Container>
  );
}