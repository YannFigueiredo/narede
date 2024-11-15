import React, { useState, useEffect } from "react";
import { Container, Intro, Infos, Text, Image, Main, Cards } from "./styles";
import DescriptionCard from "./components/DescriptionCard";
import infoImg from "assets/images/quem-somos-img.png";

export default function About() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards([
      {
        title: "Valorização Cultural",
        number: 1,
        text: "Preservamos e divulgamos a cultura amazônica, dando voz às narrativas locais."
      },
      {
        title: "Inclusão e Diversidade",
        number: 2,
        text: "Celebramos a diversidade de histórias, estilos e personagens que enriquecem a cultura dos quadrinhos."
      },
      {
        title: "Qualidade e Inovação",
        number: 3,
        text: "Buscamos constantemente a excelência, criando um espaço virtual moderno e acessível para os quadrinhos."
      },
      {
        title: "Comunidade e Colaboração",
        number: 4,
        text: "Acreditamos na força da comunidade e incentivamos parcerias e a participação de todos os apaixonados por HQs. Entre no \"Na Rede\" e faça parte deste movimento que conecta quadrinhos, cultura e a essência única do Norte do Brasil!"
      }
    ]);
  }, []);

  return(
    <Container>
      <Main>
        <h1>Quem Somos</h1>
        <Intro>
          Bem-vindo ao &quot;Na Rede&quot;, um portal criado para celebrar, valorizar e divulgar as produções de quadrinhos da região Norte do Brasil. Desenvolvido por Daniel Remédios, Rafael Nascimento e Yann Figueiredo, o site nasceu da paixão por HQs e do desejo de conectar leitores e criadores de histórias em quadrinhos que expressam a rica diversidade cultural, social e ambiental da Amazônia.
        </Intro>
        <Infos>
          <Text>
            <div>
              <h4>Nossa Missão</h4>
              <p>
                Nossa missão é promover a leitura e a produção de quadrinhos regionais, oferecendo um espaço dedicado a artistas locais e suas histórias, contribuindo para que as vozes e tradições da Amazônia sejam conhecidas, respeitadas e divulgadas. Através do &quot;Na Rede&quot;, buscamos apoiar a difusão de quadrinhos que abordam temas locais e fortalecem a identidade cultural da região.
              </p>
            </div>
            <div>
              <h4>Nossa Visão</h4>
              <p>
                Queremos nos tornar a principal plataforma de referência para HQs na Amazônia, onde artistas, leitores e entusiastas possam se conectar, criar e explorar o universo de histórias em quadrinhos regionais. Sonhamos com um futuro em que os quadrinhos da região Norte tenham reconhecimento nacional e internacional, conquistando espaços e inspirando gerações.
              </p>
            </div>
          </Text>
          <Image>
            <img src={infoImg} alt="Imagem" />
          </Image>
        </Infos>
        <h3>Nossos Valores</h3>
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