import React, { useState, useEffect } from "react";
import { Container } from "components/Container/page";
import {
  Main,
  Title,
  ContentWrapper,
  Top,
  TopContent,
  Posts
} from "./styles";
import ProducerCard from "./components/ProducerCard";
import TitleCard from "components/TitleCard";
import Post from "./components/Post";
import TitleModal from "components/TitleModal";
import { titlesList } from "utils/mocks/titlesList";

export default function Blog() {
  const [producers, setProducers] = useState([]);
  const [comics, setComics] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setProducers([
      {name: "Fulano", username: "fulanodetal"},
      {name: "Claudia", username: "claudiacard"},
      {name: "Alex", username: "alexfig"},
      {name: "Max", username: "maxcambota"},
      {name: "Beltrano", username: "beltranosilva"}
    ]);

    setComics(titlesList.slice(3, 8));

    setPosts([
      {
        title: "Brega story é fantástica",
        text: "Vocês precisa dar uma chance a essa obra espetacular. Conta de forma incrível sobre o estilo musical brega.",
        image: "https://parawebnews.com/wp-content/uploads/2022/07/brega_00732178_0_.jpg",
        username: "claudiacard"
      },
      {
        title: "O Pará é cheio de ótimos autores de quadrinhos",
        text: "Não sabia que na minha terra existem tantos artistas talentosos. Estou muito orgulhoso de ser paraense.",
        image: "https://i0.wp.com/jornal.usp.br/wp-content/uploads/2019/09/20190911_estudio-casa-velha.jpg?fit=800%2C420&ssl=1",
        username: "alexfig"
      },
      {
        title: "Quero sugestões para um novo quadrinho",
        text: "Oi, pessoal. Poderiam me dar algumas sugestões para me ajudar a sair do bloqueio criativo? Estou entusiasmado para escrever e desenhar minha próxima obra.",
        image: "https://w7.pngwing.com/pngs/484/249/png-transparent-happy-people-happy-hand-painted-figures-cartoon.png",
        username: "beltranosilva"
      }
    ]);
  }, []);

  return(
    <Container>
      <TitleModal />
      <Main>
        <Title>
          Posts da Comunidade
        </Title>
        <ContentWrapper>
          <Top>
            <h2>Top usuários</h2>
            <TopContent>
              {
                producers.map((producer, key) => (
                  <ProducerCard
                    key={key}
                    name={producer.name}
                    username={producer.username}
                  />
                ))
              }
            </TopContent>
          </Top>
          <Posts>
            {
              posts.map((post, key) => (
                <Post 
                  key={key}
                  title={post.title}
                  image={post.image}
                  text={post.text}
                  username={post.username}
                />
              ))
            }
          </Posts>
          <Top>
            <h2>Top obras</h2>
            <TopContent id="top-titles">
              {
                comics && comics.length > 0 && comics.map((comic, key) => (
                  <TitleCard
                    key={key}
                    id={comic.id}
                    description={comic.description}
                    author={comic.author}
                    title={comic.title}
                    variation="small"
                    cover={comic.cover}
                    year={comic.year}
                    category={comic.category}
                  />
                ))
              }
            </TopContent>
          </Top>
        </ContentWrapper>
      </Main>
    </Container>
  );
}