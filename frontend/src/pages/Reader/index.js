import React, { useState } from "react";
import { Container } from "components/Container/page";
import { Main, Tabs, Content } from "./styles";

export default function Reader() {
  const [tab, setTab] = useState(0);

  return(
    <Container>
      <Main>
        <Tabs>
          <ul>
            <li onClick={() => setTab(0)}>Favoritos</li>
            <li onClick={() => setTab(1)}>Histórico</li>
            <li onClick={() => setTab(2)}>Configurações da conta</li>
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
      </Main>
    </Container>
  );
}