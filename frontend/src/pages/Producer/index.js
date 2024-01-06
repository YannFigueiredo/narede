import React, { useState } from "react";
import Infos from "./components/Infos";
import Option from "./components/Option";
import { Container, Header, Main, Content, Options, OptionWrapper } from "./styles";
import obra1 from "assets/covers/obra1.jpeg";
import obra2 from "assets/covers/obra2.jpeg";
import obra3 from "assets/covers/obra3.jpeg";
import ilustracao1 from "assets/images/ilustracao1.jpg";
import ilustracao2 from "assets/images/ilustracao2.jpg";
import ilustracao3 from "assets/images/ilustracao3.jpg";
import belemImaginaria from "assets/images/belem-imaginaria.jpg";
import bregaStory from "assets/images/brega_story.jpg";
import lasCabacas from "assets/images/las_cabacas.jpg";

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
          {activeOption === 1 &&          
            <OptionWrapper>
              <Option cover={obra1} title="Carimbó: O Tesouro Cultural" />
              <Option cover={obra2} title="O encanto do rio"/>
              <Option cover={obra3} title="Viva Nazaré" />
            </OptionWrapper>
          }
          {activeOption === 2 &&          
            <OptionWrapper>
              <Option cover={ilustracao1} title="Kamen rider" />
              <Option cover={ilustracao2} title="Jack"/>
              <Option cover={ilustracao3} title="Feliz ano novo" />
            </OptionWrapper>
          }
          {activeOption === 3 &&          
            <OptionWrapper>
              <Option cover={belemImaginaria} title="Belém Imaginária" />
              <Option cover={lasCabacas} title="Las Cabaças"/>
              <Option cover={bregaStory} title="Brega Story" />
            </OptionWrapper>
          }
        </Content>
      </Main>
    </Container>
  );
}