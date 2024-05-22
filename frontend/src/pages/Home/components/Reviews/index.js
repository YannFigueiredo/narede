import React, { useEffect, useRef } from "react";
import { Container, Main, Cards } from "./styles";
import Card from "pages/Home/components/Reviews/components/Card";
import { reviews } from "./utils/reviews";

export default function Review() {
  const contentCard = useRef(null);

  const verifyScreenPosition = () => {
    var show = 20;
    var contentCardHeight = contentCard.current.offsetHeight;
    var contentCardTop = contentCard.current.getBoundingClientRect().top;
    var screenHeight = global.window.innerHeight;

    if (contentCardTop <= screenHeight - (contentCardHeight * (show / 100))) {
      contentCard.current.classList.add("fade-in");
    }
  };

  useEffect(() => {
    global.window.addEventListener("scroll", verifyScreenPosition);
    
    return () => global.window.removeEventListener("scroll", verifyScreenPosition);
  }, []);

  useEffect(() => {
    let scrollContainer = contentCard.current;
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

  return (
    <Container>
      <Main>        
        <Cards ref={contentCard}>
          {reviews.map(review => (
            <Card
              key={review.id}
              title={review.title}
              text={review.text}
            />
          ))}
        </Cards>
      </Main>
    </Container>
  );
}