import {
  Container,
  Main,
  Content,
  ButtonWrapper,
  ImageWrapper
} from "./styles";
import dispositivos from "assets/images/dispositivos.png";
import { useNavigate } from "react-router-dom";

export default function BannerPlans() {
  const navigate = useNavigate();

  return(
    <Container>
      <h1>
        Descubra o universo dos quadrinhos na "Na Rede"!
      </h1>
      <Main>
        <Content>
          <p>
            Escolha como viver essa experiência: crie uma conta gratuita ou assine um plano para aproveitar ainda mais benefícios.
          </p>
          <h2>Conta gratuita:</h2>
          <div>
            <p>
            - Leia uma seleção de quadrinhos grátis, como Vero-Peixe, Las Cabaças e Zagaia.<br/>
            - Navegue por todo o catálogo e conheça títulos incríveis.<br/>
            - Interaja com outros leitores e quadrinistas na comunidade.<br/>
            - Totalmente gratuita, sem necessidade de cadastro de pagamento.
            </p>
          </div>
          <h2>Assinatura Premium:</h2>
          <p>
            - Tenha acesso a conteúdos exclusivos e novas histórias.<br/>
            - Aproveite ao máximo sua experiência como leitor apaixonado por quadrinhos.
          </p>
          <h2>Começe agora mesmo!</h2>
          <p>
            Crie sua conta e mergulhe nesse universo criativo, seja gratuitamente ou com a assinatura que mais combina com você.
          </p>
          <ButtonWrapper>
            <a 
              onClick={
                () => navigate("/planos")
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
    </Container>
  );
};