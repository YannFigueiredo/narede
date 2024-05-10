import React, { useState, useEffect } from "react";
import { Container, Main, Content, HeaderTitles, Selector, Filter, TitlesArea } from "./styles";
import { titlesList } from "utils/mocks/titlesList";
import TitleCard from "components/TitleCard";
import TitleModal from "components/TitleModal";
import Button from "components/Button";
import Input from "components/Input";

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
        <Content>
          <Input 
            className="search-input-categories"
            width="auto"
            isSearch
            placeholder="Insira título ou quadrinista"
            onChange={() => {}}
            onClick={() => {}}
            onKeyDown={() => {}}
          />
          <HeaderTitles>
            <Selector active={activeCategory + 1}>
              {
                categories && categories.length > 0 && categories.map((category, key) => (
                  <Button 
                    variant="tab"
                    key={key}
                    text={category.name}
                    onClick={() => setActiveCategory(key)}
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
          </HeaderTitles>
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
                  isFree={title.isFree}
                  year={title.year}
                  cover={title.cover}
                  variation="small"
                />
              ))
            }
          </TitlesArea>
        </Content>
      </Main>
      <TitleModal />
    </Container>
  );
}