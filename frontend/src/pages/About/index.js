import React, { useState, useEffect } from "react";
import { Container } from "components/Container/page";
import { Main, Cards } from "./styles";
import DescriptionCard from "./components/DescriptionCard";

export default function About() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards([
      {
        title: "Novidade",
        number: 1,
        text: "O Navega Comics é a resposta que os leitores e produtores de quadrinhos da região norte do Brasil estavam esperando. Desenvolvido por uma equipe de profissionais altamente talentosos, composta pelo designer Rafael Nascimento e Daniel Remédios, e pelo programador Yann Figueiredo, este site é a plataforma perfeita para todos aqueles apaixonados por quadrinhos que desejam se conectar e explorar o mundo fascinante dos trabalhos produzidos na região norte do país."
      },
      {
        title: "Propósito",
        number: 2,
        text: "O Navega Comics tem como objetivo principal aproximar o público leitor dos quadrinhos produzidos no norte do Brasil. Com um acervo impressionante de diversas histórias em quadrinhos, o site oferece aos leitores a oportunidade de descobrir e desfrutar de novas narrativas, personagens cativantes e ilustrações incríveis, tudo isso sem precisar sair de casa. Sejam quadrinhos de ação, aventura, fantasia ou até mesmo dramas emocionantes, o Navega Comics tem algo para todos os gostos."
      },
      {
        title: "Visibilidade",
        number: 3,
        text: "Além disso, o Navega Comics também é uma vitrine digital perfeita para os produtores e quadrinistas da região norte. Com a possibilidade de expor seus trabalhos para um público amplo e dedicado, os artistas podem alcançar novos fãs, receber feedback valioso e até mesmo oportunidades de colaboração e parcerias. O site oferece uma plataforma profissional e user-friendly, facilitando a interação entre os produtores e o público."
      },
      {
        title: "À vontade",
        number: 4,
        text: "O layout do Navega Comics foi cuidadosamente planejado para oferecer uma experiência de navegação fluída e agradável. Com uma interface intuitiva, os leitores podem facilmente encontrar os quadrinhos que desejam ler, filtrar por gêneros ou descobrir novos talentos da região. A qualidade das imagens e ilustrações presentes no site é impecável, garantindo uma experiência visual imersiva e envolvente para os leitores."
      }
    ]);
  }, []);

  return(
    <Container>
      <Main>
        <Cards>
          {
            cards.map((card, key) => (
              <DescriptionCard
                key={key}
                title={card.title}
                number={parseInt(card.number) < 10 ? `0${key + 1}` : card.number}
                text={card.text}
                variant={parseInt(card.number) % 2 !== 0 ? "left" : "right"}
              /> 
            ))
          }
        </Cards>
      </Main>
    </Container>
  );
}