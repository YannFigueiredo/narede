import React, { useState, useEffect } from "react";
import { Container } from "../../components/Container/page";
import Intro from "components/Intro";
import MostPopular from "pages/Home/components/MostPopular";
import MostRecent from "pages/Home/components/MostRecent";
import Reviews from "./components/Reviews";
import FirstScreen from "./components/FirstScreen";
import TitleModal from "components/TitleModal";
import { Content, Main } from "./styles";

export default function Home() {
  const [isLogged, setIsLogged] = useState(global.localStorage.getItem("logged") === "true" ? true : false);

  useEffect(() => {
    setIsLogged(global.localStorage.getItem("logged") === "true" ? true : false);
  }, []);

  return(
    <>
      {isLogged &&
        <Container>
          <Intro />
          <Content>
            <Main>
              <MostRecent title="Recomendações" />
              <MostRecent title="Mais recentes" />
            </Main>
            <MostPopular />
          </Content>
          <Reviews />
          <TitleModal />
        </Container>
      }
      {!isLogged &&
        <FirstScreen />
      }
    </>

  );
}