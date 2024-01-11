import React, { useState, useEffect } from "react";
import { 
  Container, 
  Main, 
  Content, 
  ButtonWrapper, 
  ImageWrapper, 
  Benefits, 
  List, 
  Intro, 
  Options,
  Cards,
  Card,
  Final
} from "./styles";
import dispositivos from "assets/images/dispositivos-img.png";
import dispositivosAlt from "assets/images/dispositivos-alt-img.png";
import MainImage from "assets/images/first-screen-img.png";
import check from "assets/icons/check.png";

export default function Plans() {
  const [cardActivated, setCardActivated] = useState(0);

  const verifyScreenPosition = () => {
    var show = 30;
    var items = global.document.querySelectorAll(".benefits-item");
    var screenHeight = global.window.innerHeight;
    var finalHeight = global.document.querySelector(".plans-final").offsetHeight;
    var finalTop = global.document.querySelector(".plans-final").getBoundingClientRect().top;

    items.forEach(item => {
      var itemHeight = item.offsetHeight;
      var itemTop = item.getBoundingClientRect().top;
   
      if (itemTop <= screenHeight - (itemHeight * (show / 100))) {
        item.classList.add("move-from-left");
      }
    });

    if (finalTop <= screenHeight - (finalHeight * (show / 100))) {
      global.document.querySelector(".plans-final").classList.add("fade-in");
    }
  };

  useEffect(() => {
    global.window.addEventListener("scroll", verifyScreenPosition);
    
    return () => global.window.removeEventListener("scroll", verifyScreenPosition);
  }, []);


  return(
    <Container>
      <Main>
        <Content>
          <h1>
            Ainda não sabe qual plano assinar? Crie uma conta e compre apenas os quadrinhos que você quiser
            ou acesse a biblioteca gratuita.
          </h1>
          <span>
            Crie sua conta gratuita e tenha acesso a diversos quadrinhos que estão na categoria grátis, ou ainda tenha a possibilidade de comprar apenas quadrinhos específicos de sua preferência. Você também poderá conhecer todo o catálogo com milhares de quadrinhos e ainda ter acesso a comunidade.<br/>
            Na conta grátis você conseguirá ler os quadrinhos que estão gratuitos no site e app, como vero-peixe, las cabaças, zagaia e outros, além de poder interagir diretamente com quadrinistas e outros leitores através da comunidade do site, e não precisa cadastrar algum meio de pagamento, o login é totalmente free. Ou ainda você pode comprar apenas aquele quadrinhos especial direto com o autor através do pix.
          </span>
          <ButtonWrapper>
            <a 
              onClick={
                () => global.document.getElementById("options").scrollIntoView({ behavior: "smooth" })
              }
            >
              Ver planos
            </a>
          </ButtonWrapper>
        </Content>
        <ImageWrapper>
          <img src={dispositivos} alt="Imagem de dispositivos" />
        </ImageWrapper>
      </Main>
      <Benefits>
        <h1>Vantagens de assinar <span>Na rede</span></h1>
        <Main>
          <List>
            <li className="benefits-item">
              <ImageWrapper>
                <img src={check} alt="Símbolo de check" />
              </ImageWrapper>
              <span>
                Leia onde e quando quiser<br/>
                Leia milhares de quadrinhos no seu desktop ou pelo app
              </span>
            </li>
            <li className="benefits-item">
              <ImageWrapper>
                <img src={check} alt="Símbolo de check" />
              </ImageWrapper>
              <span>
                Leia offline<br/>
                Baixe e leia seus quadrinhos sem precisar de internet
              </span>
            </li>
            <li className="benefits-item">
              <ImageWrapper>
                <img src={check} alt="Símbolo de check" />
              </ImageWrapper>
              <span>
                Apoio aos artistas<br/>
                Apoie e interaja diretamente com seus artistas preferidos
              </span>
            </li>
            <li className="benefits-item">
              <ImageWrapper>
                <img src={check} alt="Símbolo de check" />
              </ImageWrapper>
              <span>
                Crie suas próprias coleções<br/>
                Crie e organize suas próprias coleções de leitura
              </span>
            </li>
            <li className="benefits-item">
              <ImageWrapper>
                <img src={check} alt="Símbolo de check" />
              </ImageWrapper>
              <span>
                Cancele quando quiser<br/>
                Você pode fazer o cancelamento do seu plano a qualquer momento
              </span>
            </li>
          </List>
          <ImageWrapper>
            <img src={dispositivosAlt} alt="Imagem alternativa de dispositivos" />
          </ImageWrapper>
        </Main>
      </Benefits>
      <Options id="options">
        <h2>Escolha o seu plano</h2>
        <Cards>
          <Card 
            className={cardActivated === 1 ? "active" : ""}
            onClick={() => setCardActivated(1)}
          >
            <h3>Plano papa-chibé:</h3>
            <h4>Mensal</h4>
            <span>
              R$ 15,00/mês<br/>
              Acesso a todo o catálogo e benefícios
            </span>
          </Card>
          <Card 
            className={cardActivated === 2 ? "active" : ""}
            onClick={() => setCardActivated(2)}
          >
            <h3>Plano açaí:</h3>
            <h4>Trimestral</h4>
            <span>
              R$ 13,00/mês<br/>
              Total de R$ 39,00 por 3 meses. Acesse a todo o catálogo e benefícios
            </span>
          </Card>
          <Card 
            className={cardActivated === 3 ? "active" : ""}
            onClick={() => setCardActivated(3)}
          >
            <h3>Plano tacacá:</h3>
            <h4>Semestral</h4>
            <span>
              R$ 11,00/mês<br/>
              Total de R$ 69,00 por 6 meses. Acesso a todo o catálogo e benefícios
            </span>
          </Card>
          <Card 
            className={cardActivated === 4 ? "active" : ""}
            onClick={() => setCardActivated(4)}
          >
            <h3>Plano pato no tucupí:</h3>
            <h4>Anual</h4>
            <span>
              R$ 7,00/mês<br/>
              Total de R$ 79,00 por 1 ano. Acesso a todo o catálogo e benefícios
            </span>
          </Card>
        </Cards>
      </Options>
      <Final className="plans-final">
        <Intro>
          <h1>
            Faça seu login ou crie sua conta grátis
          </h1>
          <div>
            <p>
              Crie sua conta gratuita e tenha acesso aos quadrinhos que estão na categoria grátis! Você também
              poderá conhecer todo o catálogo com milhares de quadrinhos.
            </p>
            <br/>
            <p>
              Na conta grátis você só conseguirá ler os quadrinhos que estão gratuitos no app, como Ajuricaba,
              Belém Imaginária e outros. E fica tranquilo, não precisa cadastrar seu cartão de crédito.
            </p>
          </div>
          <ButtonWrapper>
            <a href="/">Criar minha conta grátis</a>
          </ButtonWrapper>
        </Intro>
        <ImageWrapper>
          <img src={MainImage} alt="Imagem da tela principal da home antes do login" />
        </ImageWrapper>
      </Final>
    </Container>
  );
}