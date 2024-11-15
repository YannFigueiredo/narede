import React from "react";
import { useBlogMemorizations } from "pages/Blog/hooks/useBlogMemorizations";
import Post from "../Post";
import { Container, Main } from "./styles";
import { useBlogStates } from "pages/Blog/hooks/useBlogStates";
import { useEffect } from "react";

export default function UserPosts() {
  const {
    postContent
  } = useBlogMemorizations();

  const {
    posts,
    setPosts
  } = useBlogStates({ postContent });

  useEffect(() => {
    setPosts(postContent.filter((post) => post.username === "iaranascimento"));
  }, [postContent]);

  return (
    <Container>
      <Main>
        <h1>Minhas Resenhas</h1>
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
      </Main>
    </Container>
  );
} 