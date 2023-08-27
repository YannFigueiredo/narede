import React, { useState } from "react";
import { Container } from "components/Container/page";
import { Main, ContentWrapper, Tabs, Content } from "./styles";

export default function Reader() {
  const [tab, setTab] = useState(0);

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
              <></>
            }
            {
              tab === 1 &&
              <></>
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