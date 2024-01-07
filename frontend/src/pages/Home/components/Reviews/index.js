import React from "react";
import { Main, Title, Cards, Card } from "./styles";
import { Container } from "components/Container/section";

export default function Review() {
  return (
    <Container>
      <Main>        
        <Title>Resenhas</Title>
        <Cards>
          <Card>
            <h3> Os mangás na amazônia</h3>
            <span>
              As vendas de mangás nas cidades da Amazônia vêm surpreendendo, superando as vendas de outros 
              quadrinhos. Esse fenômeno pode ser atribuído à popularidade crescente dos mangás, especialmente 
              entre os jovens. Os mangás têm sido uma fonte de inspiração para novos artistas na região, que 
              encontram neles um meio de expressão e de contar histórias de forma visualmente atrativa. A 
              presença e aceitação dos mangás na Amazônia mostram como a influência dessa forma de arte japonesa 
              ultrapassou barreiras culturais e geográficas, consolidando-se como um fenômeno global.
            </span>
          </Card>
          <Card>
            <h3>Quadrinhos amazônicos</h3>
            <span>
              Os quadrinhos amazônicos se destacam pela utilização de cores vivas que representam de forma vibrante 
              e autêntica a fauna e flora característica da região. Através de uma linguagem visual marcante, essas 
              obras apresentam uma paleta de cores que reflete a exuberância da Amazônia, pontuada por tons 
              vibrantes como o verde das folhagens, o amarelo do sol, o marrom da terra e o azul dos rios. Essa 
              escolha cromática não apenas enriquece a estética das histórias, mas também busca estabelecer uma 
              identificação visual com o ambiente natural, criando uma imersão mais intensa para o leitor. Ao 
              explorar as cores da floresta de forma precisa e impactante, os quadrinhos amazônicos conseguem 
              transmitir a rica diversidade e vitalidade que compõem esse ecossistema singular do nosso país.
            </span>
          </Card>
          <Card>
            <h3>Quadrinista paraense na marvel</h3>
            <span>
              Benedito Nascimento, também conhecido como Joe Bennett, é um renomado quadrinista e ilustrador 
              paraense que alcançou reconhecimento internacional por seu trabalho na Marvel e DC Comics. Sua 
              habilidade técnica e talento artístico tornaram-no uma inspiração para sua comunidade e para 
              artistas em todo o mundo. Bennett já emprestou sua expertise para a criação de diversos personagens 
              icônicos, e seu estilo distintivo pode ser encontrado em títulos como &#34;The Incredible Hulk&#34; e 
              &#34;Captain America&#34;. Sua contribuição para a indústria de quadrinhos é indiscutivelmente inestimável, 
              e ele continua a surpreender os fãs com sua criatividade e dedicação ao seu ofício. Seu sucesso serve 
              como um exemplo inspirador para jovens artistas que aspiram a seguir seus passos e deixar sua marca 
              no mundo dos quadrinhos.
            </span>
          </Card>
        </Cards>
      </Main>
    </Container>
  );
}