import React from "react";
import { Container } from "components/Container/page";
import {
  Main,
  ToggleWrapper,
  Toggle,
  Options 
} from "./styles";

export default function Signature() {
  return(
    <Container>
      <Main>
        <ToggleWrapper>
          <span>Ativa</span>
          <Toggle>
            <div></div>
          </Toggle>
        </ToggleWrapper>
        <Options>
          <li>Formas de pagamento</li>
          <li>Histórico de cobrança</li>
        </Options>
      </Main>
    </Container>
  );
}