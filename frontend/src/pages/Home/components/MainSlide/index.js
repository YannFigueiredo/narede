import React, { useState, useEffect, useRef } from "react";
import { Container } from "components/Container/section";
import { 
  Tabs,
  Header,
  Main,
  SlideContainer,
  ComicsWrapper,
  CardWrapper,
  Divider 
} from "./styles";
import { titlesList } from "utils/mocks/titlesList";
import HomeTitleCard from "pages/Home/components/HomeTitleCard";

export default function MainSlide() {
  const [comics, setComics] = useState([]);
  const [active, setActive] = useState(1);
  const slide = useRef(null);

  useEffect(() => {
    setComics(titlesList.slice(0, 3));

    const interval = setInterval(() => {
      setActive(prevActive => prevActive < 2 ? prevActive + 1 : 0);
    }, 3000);

    console.log(active);
  
    return () => {
      clearInterval(interval);
    };
  }, []);

  return(
    <Container>
      <Main>
        <Tabs>
          <div className={active === 0 ? "active" : ""}></div>
          <div className={active === 1 ? "active" : ""}></div>
          <div className={active === 2 ? "active" : ""}></div>
        </Tabs>
        <Header>
          <h2>Destaque</h2>
        </Header>
        <SlideContainer>
          <ComicsWrapper ref={slide}>
            {
              comics.map((comic, key) => (
                <CardWrapper key={key}>
                  <HomeTitleCard 
                    title={comic}
                    withTitle={false}
                    variation="home-card"
                    width={key === active ? 20 : 10} 
                    height={key === active ? 15 : 14}
                  />
                  {
                    (key == 0 || key == 1) && 
                    <Divider>
                      <div></div>
                      <div></div>
                      <div></div>
                      <span></span>
                    </Divider>
                  }
                </CardWrapper>
              ))
            }
          </ComicsWrapper>
        </SlideContainer>
      </Main>
    </Container>
  );
}