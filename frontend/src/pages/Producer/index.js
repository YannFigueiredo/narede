import React, { useState } from "react";
import Infos from "./components/Infos";
import Option from "./components/Option";
import { Container, Header, Main, Content, Options, OptionWrapper } from "./styles";
import obra1 from "assets/covers/obra1.jpeg";
import obra2 from "assets/covers/obra2.jpeg";
import obra3 from "assets/covers/obra3.jpeg";

export default function Producer() {
  const [activeOption, setActiveOption] = useState(1);

  return(
    <Container>
      <Header>

      </Header>
      <Main>
        <Infos />
        <Content>
          <Options>
            <span 
              className={activeOption === 1 ? "active" : ""}
              onClick={() => setActiveOption(1)}
            >
              Obras
            </span>
            <span 
              className={activeOption === 2 ? "active" : ""}
              onClick={() => setActiveOption(2)}
            >
              Ilustrações
            </span>
            <span 
              className={activeOption === 3 ? "active" : ""}
              onClick={() => setActiveOption(3)}
            >
              Prévias
            </span>
          </Options>
          <OptionWrapper>
            <Option cover={obra1} title="Carimbó: O Tesouro Cultural" />
            <Option cover={obra2} title="O encanto do rio"/>
            <Option cover={obra3} title="Viva Nazaré" />
          </OptionWrapper>
        </Content>
      </Main>
    </Container>
  );
}