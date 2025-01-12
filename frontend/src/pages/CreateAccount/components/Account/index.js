import React, { useState } from "react";
import {
  Container,
  Tabs,
  Main
} from "./styles";
import Infos from "./components/Infos";
import Password from "./components/Password";
import Plans from "./components/Plans";

export default function Account() {
  const [tab, setTab] = useState(1);
  
  return(
    <Container>
      <Tabs>
        <ul>
          <li 
            onClick={() => setTab(1)}
            className={tab === 1 ? "active" : ""}
          >
            Informações básicas
          </li>
          <li 
            onClick={() => setTab(2)}
            className={tab === 2 ? "active" : ""}
          >
            Conta
          </li>
          <li 
            onClick={() => setTab(3)}
            className={tab === 3 ? "active" : ""}
          >
            Planos
          </li>
        </ul>
      </Tabs>
      <Main>
        {
          tab === 1 &&
          <Infos />
        }
        {
          tab === 2 &&
          <Password />
        }
        {
          tab === 3 &&
          <Plans />
        }
      </Main>
    </Container>
  );
}