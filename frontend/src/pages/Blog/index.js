import React, { useState, useEffect } from "react";
import {
  Container,
  Main,
  ContentWrapper,
  Top,
  AsideWrapper,
  TopContent,
  Posts,
  Options,
  ButtonWrapper,
  TagUser,
  ItemsWrapper
} from "./styles";
import ProducerCard from "./components/ProducerCard";
import Post from "./components/Post";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import PendingIcon from "@mui/icons-material/Pending";
import ProfilePhoto from "assets/images/photo-profile2.jpg";

export default function Blog() {
  const [producers, setProducers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setProducers([
      {name: "Cristiano", username: "cristiano7"},
      {name: "Claudia", username: "claudiacard"},
      {name: "Alex", username: "alexfig"},
      {name: "Max", username: "maxcambota"},
    ]);

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
      <Main>
        <ContentWrapper>
          <Top>
            <AsideWrapper>
              <h2>Quem seguir</h2>
              <TopContent>
                {
                  producers.map((producer, key) => (
                    <ProducerCard
                      key={key}
                      username={producer.username}
                    />
                  ))
                }
              </TopContent>
            </AsideWrapper>
            <AsideWrapper>              
              <h2>Em alta</h2>
              <TopContent>
                <div className="popular">
                  <h4>Acelera!</h4>
                  <span>1,3 mil posts</span>
                </div>
                <div className="popular">
                  <h4>Felipe Garcia</h4>
                  <span>875 posts</span>
                </div>
                <div className="popular">
                  <h4>Coletivo BRT</h4>
                  <span>572 posts</span>
                </div>
              </TopContent>
            </AsideWrapper>
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
          <Options>
            <ButtonWrapper>
              <a href="#">Postar</a>
            </ButtonWrapper>
            <TagUser>
              <img src={ProfilePhoto} alt="Foto de perfil" />
              <span>Iara Nascimento</span>
            </TagUser>
            <ItemsWrapper>
              <li><SearchIcon className="item-icon" />Pesquisar</li>
              <li><EmailIcon className="item-icon" />Mensagens</li>
              <li><NotificationsIcon className="item-icon" />Notificações</li>
              <li><PersonIcon className="item-icon" />Perfil</li>
              <li><PendingIcon className="item-icon" />Mais</li>
            </ItemsWrapper>
          </Options>
        </ContentWrapper>
      </Main>
    </Container>
  );
}