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
            Descubra o mundo dos quadrinhos na "Na Rede"!
          </h1>
          <p>
            Crie uma conta e comece explorando! Você pode acessar quadrinhos gratuitos ou adquirir apenas aqueles títulos específicos que mais chamam sua atenção.
          </p>
          <h2>Conta gratuita</h2>
          <div>
            <p>
              Com a conta gratuita, você terá acesso a uma biblioteca recheada de quadrinhos na categoria grátis, como Vero-Peixe, Las Cabaças, Zagaia e muitos outros. Além disso, você pode navegar por todo o catálogo, conhecer milhares de títulos incríveis e interagir diretamente com quadrinistas e outros leitores na comunidade do site.
            </p>
            <p>
              E o melhor: a conta é totalmente gratuita e não exige cadastro de nenhum meio de pagamento. Quer algo especial? Adquira quadrinhos individuais diretamente dos autores, de forma simples, com pagamento via Pix.
            </p>
          </div>
          <h2>Assine um plano</h2>
          <p>
            Quer aproveitar ainda mais benefícios? Explore os planos de assinatura da "Na Rede" e descubra uma experiência completa para leitores apaixonados por quadrinhos. Tenha acesso a conteúdos exclusivos, novas histórias, e mergulhe de vez nesse universo criativo.
          </p>
          <h2>Começe agora!</h2>
          <p>
            Crie sua conta hoje mesmo, seja gratuita ou assinando um plano, e faça parte dessa comunidade de leitores e criadores de quadrinhos!
          </p>
          <h2>Assine um Plano e descubra o Melhor dos Quadrinhos!</h2>
          <p>
            Na "Na Rede", nossos planos de assinatura foram pensados especialmente para leitores apaixonados por quadrinhos. Assinando um dos planos, você terá acesso completo ao nosso catálogo, com conteúdos exclusivos, histórias emocionantes e diversos benefícios que tornam sua experiência ainda mais especial.
          </p>
          <h2>Por que assinar?</h2>
          <div>
            <p>
              Com um plano de assinatura, você garante acesso ilimitado a centenas de quadrinhos, participa de uma comunidade vibrante e apoia diretamente os quadrinistas da região norte.
            </p>
            <p>
              Escolha seu plano, assine agora e viva a melhor experiência como leitor de quadrinhos!
            </p>
          </div>
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
    </Container>
  );
}