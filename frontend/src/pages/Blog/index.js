import React from "react";
import { Container } from "components/Container/page";
import {
  Main,
  Title,
  ContentWrapper,
  Top,
  TopContent,
  Posts
} from "./styles";

export default function Blog() {
  return(
    <Container>
      <Main>
        <Title>
          Posts da Comunidade
        </Title>
        <ContentWrapper>
          <Top>
            <h2></h2>
            <TopContent>

            </TopContent>
          </Top>
          <Posts>

          </Posts>
          <Top>
            <h2></h2>
            <TopContent>
              
            </TopContent>
          </Top>
        </ContentWrapper>
      </Main>
    </Container>
  );
}