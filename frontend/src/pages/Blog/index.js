import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import EditNoteIcon from "@mui/icons-material/EditNote";
import ProfilePhoto from "assets/images/photo-profile2.jpg";
import { useBlogMemorizations } from "./hooks/useBlogMemorizations";
import { useBlogStates } from "./hooks/useBlogStates";
import MostPopular from "./components/MostPopular";

export default function Blog() {
  const navigate = useNavigate();

  const {
    producers,
    setProducers,
    posts,
    setPosts
  } = useBlogStates();

  const {
    postContent,
    producerContent
  } = useBlogMemorizations();

  useEffect(() => {
    setProducers(producerContent);

    setPosts(postContent);
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
              <MostPopular />
            </AsideWrapper>
            <AsideWrapper>              
              <h2>Ranking dos artistas</h2>
              <TopContent>
                <div className="popular">
                  <h4>Thiago Tavares</h4>
                  <span>1,6 mil posts</span>
                </div>
                <div className="popular">
                  <h4>Ana Dantas</h4>
                  <span>958 posts</span>
                </div>
                <div className="popular">
                  <h4>Ádson Silva</h4>
                  <span>572 posts</span>
                </div>
              </TopContent>
            </AsideWrapper>
            <AsideWrapper>              
              <h2>Top leitores</h2>
              <TopContent>
                <div className="popular">
                  <h4>Marcus Santiago</h4>
                  <span>1,3 mil leituras</span>
                </div>
                <div className="popular">
                  <h4>Matthew Murdock</h4>
                  <span>875 leituras</span>
                </div>
                <div className="popular">
                  <h4>Walter White</h4>
                  <span>425 leituras</span>
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
                  urlPhoto={post.urlPhoto ? post.urlPhoto : undefined}
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
              <li 
                onClick={() => navigate("/comunidade/minhas-resenhas")}
              >
                <EditNoteIcon className="item-icon" />Minhas Resenhas
              </li>
              <li><PendingIcon className="item-icon" />Mais</li>
            </ItemsWrapper>
          </Options>
        </ContentWrapper>
      </Main>
    </Container>
  );
}