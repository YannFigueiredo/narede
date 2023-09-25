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
        text: "Pai d’égua, finalmente está aqui o Navega Comics! A resposta que todos os adoradores de quadrinhos da região Norte do Brasil estavam aguardando ansiosamente. E acredite, esse site é sensacional! Desenvolvido por uma equipe altamente talentosa, incluindo o incrível designer Rafael Nascimento, o talentoso Daniel Remédios e o programador brilhante Yann Figueiredo. Essa plataforma é perfeita para quem quer explorar o mundo dos quadrinhos produzidos no Norte do país."
      },
      {
        title: "Propósito",
        number: 2,
        text: "O objetivo principal do Navega Comics é aproximar os leitores dos quadrinhos da região Norte do Brasil. E eles têm um acervo incrível, repleto de histórias cativantes e ilustrações de tirar o fôlego. Não é preciso sair de casa para descobrir novas narrativas de ação, aventura, fantasia ou até mesmo dramas emocionantes. Aqui você encontra tudo que gosta!"
      },
      {
        title: "Visibilidade",
        number: 3,
        text: "Além disso, o Navega Comics é um paraíso para os quadrinistas e produtores da região. Eles podem mostrar seu talento para um público amplo e dedicado, receber feedback valioso e quem sabe até oportunidades de colaboração. A plataforma é super profissional e fácil de usar, criando uma conexão incrível entre os artistas e o público."
      },
      {
        title: "Visual",
        number: 4,
        text: "Agora vamos falar do visual do site. O layout foi cuidadosamente pensado, para garantir uma navegação tranquila e prazerosa. Com uma interface intuitiva, fica fácil encontrar os quadrinhos que você está procurando, filtrar por gêneros ou simplesmente descobrir novos talentos do Norte. As imagens e ilustrações são de uma qualidade impecável, proporcionando uma experiência visual de outro mundo."
      },
      {
        title: "Comunidade",
        number: 5,
        text: "E tem mais, o Navega Comics é muito mais do que um simples site. É uma comunidade! Leitores e produtores de quadrinhos da região Norte podem se conectar e compartilhar suas experiências. Nos fóruns de discussão e nas sessões de comentários, todo mundo pode expressar suas opiniões e se envolver ativamente. É incrível fazer parte dessa comunidade apaixonada!"
      },
      {
        title: "Conclusão",
        number: 6,
        text: "Resumindo, o Navega Comics é simplesmente indispensável para quem ama quadrinhos na região Norte do Brasil. Com um acervo vasto, uma vitrine digital para artistas brilhantes e uma comunidade ativa e envolvente, esse site é o lugar perfeito para se aventurar nas histórias em quadrinhos do Norte do país. Junte-se a nós e descubra o poder criativo que a região Norte tem a oferecer através do Navega Comics. Então, bora embarcar nessa jornada juntos?"
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