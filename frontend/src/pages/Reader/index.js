import React, { useState, useEffect } from "react";
import { Container } from "components/Container/page";
import { Main, ContentWrapper, Tabs, Content } from "./styles";
import List from "./components/List";

export default function Reader() {
  const [tab, setTab] = useState(0);
  const [favorites, setFavorites] = useState();
  const [historic, setHistoric] = useState();

  useEffect(() => {
    setFavorites([
      {
        id: 6,
        title: "Las Cabaças: A Primeira Aventura",
        date: "25/08/2023"
      },
      {
        id: 7,
        title: "Vero Pexe e sua Turma",
        date: "26/08/2023"
      },
      {
        id: 8,
        title: "Tailus em Busca da Semente da Vida",
        date: "27/08/2023"
      }
    ]);
    setHistoric([
      {
        id: 6,
        title: "Las Cabaças: A Primeira Aventura",
        date: "25/08/2023"
      },
      {
        id: 7,
        title: "Vero Pexe e sua Turma",
        date: "26/08/2023"
      },
      {
        id: 8,
        title: "Tailus em Busca da Semente da Vida",
        date: "27/08/2023"
      }
    ]);
  }, []);

  return(
    <Container>
      <Main>
        <hr />
        <ContentWrapper>
          <Tabs>
            <ul>
              <li>
                <span
                  onClick={() => setTab(0)} 
                  className={tab === 0 ? "selected" : ""}
                >
                  Favoritos
                </span>
                <div className={tab === 0 ? "detail-selected" : ""}></div>
              </li>
              <li>
                <span
                  onClick={() => setTab(1)} 
                  className={tab === 1 ? "selected" : ""}
                >
                  Histórico
                </span>
                <div className={tab === 1 ? "detail-selected" : ""}></div>
              </li>
              <li>
                <span
                  onClick={() => setTab(2)} 
                  className={tab === 2 ? "selected" : ""}
                >
                  Configurações da Conta
                </span>
                <div className={tab === 2 ? "detail-selected" : ""}></div>
              </li>
            </ul>
          </Tabs>
          <Content>
            {
              tab === 0 &&
              <List list={favorites} />
            }
            {
              tab === 1 &&
              <List list={historic} isHistoric />
            }
            {
              tab === 2 &&
              <></>
            }
          </Content>
        </ContentWrapper>
      </Main>
    </Container>
  );
}