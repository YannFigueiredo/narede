import React, { useEffect, useRef } from "react";
import { titlesList } from "utils/mocks/titlesList";
import { Container, TitleWrapper, CardsWrapper } from "./styles";
import HomeTitleCard from "pages/Home/components/HomeTitleCard";

export default function MostRecentVersion2({ title }) {
  const cards = useRef(null);

  const verifyScreenPosition = () => {
    var show = 0.1;
    var screenHeight = global.window.innerHeight;
    var itemHeight = cards.current.offsetHeight;
    var itemTop = cards.current.getBoundingClientRect().top;
   
    if (itemTop <= screenHeight - (itemHeight * (show / 100))) {
      cards.current.classList.add("move-from-bottom");
    }
  };

  useEffect(() => {
    global.window.addEventListener("scroll", verifyScreenPosition);
    
    return () => global.window.removeEventListener("scroll", verifyScreenPosition);
  }, []);

  useEffect(() => {
    let scrollContainer = cards.current;
    let startX = 0;
    let scrollLeft = 0;

    scrollContainer.addEventListener("mousedown", (e) => {
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
      scrollContainer.classList.add("active");
    });

    scrollContainer.addEventListener("mouseleave", () => {
      scrollContainer.classList.remove("active");
    });

    scrollContainer.addEventListener("mouseup", () => {
      scrollContainer.classList.remove("active");
    });

    scrollContainer.addEventListener("mousemove", (e) => {
      if(!scrollContainer.classList.contains("active")) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainer.scrollLeft = scrollLeft - walk;
    });
  }, []);

  return(
    <Container>
      <TitleWrapper>
        <h2>{title}</h2>
      </TitleWrapper>
      <CardsWrapper ref={cards}>
        {
          titlesList.slice(8, 13).map((card, key) => (
            <HomeTitleCard 
              key={key}
              title={card}
              withTitle={false}
              variation="home-card"
              width={16} 
              height={10}
            />
          ))
        }
      </CardsWrapper>
    </Container>
  );
}