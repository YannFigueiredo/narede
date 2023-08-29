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

export default function Blog() {
  const [producers, setProducers] = useState([]);

  useEffect(() => {
    setProducers([
      {name: "Fulano", username: "fulanodetal"},
      {name: "Claudia", username: "claudiacard"},
      {name: "Alex", username: "alexfig"},
      {name: "Max", username: "maxcambota"},
      {name: "Beltrano", username: "beltranosilva"}
    ]);
  }, []);

  return(
    <Container>
      <Main>
        <Title>
          Posts da Comunidade
        </Title>
        <ContentWrapper>
          <Top>
            <h2>Top produtores</h2>
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

          </Posts>
          <Top>
            <h2>Top obras</h2>
            <TopContent>
              
            </TopContent>
          </Top>
        </ContentWrapper>
      </Main>
    </Container>
  );
}