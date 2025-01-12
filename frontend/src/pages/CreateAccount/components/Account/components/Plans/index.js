import React, { useState, useEffect } from "react";
import {
  Container,
  ToggleWrapper,
  Toggle,
  Cards,
  Card
} from "./styles";

export default function Plans() {
  const [cardActivated, setCardActivated] = useState(1);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if(isActive) {
      setCardActivated(1);
    } else {
      setCardActivated(0);
    }

    console.log(isActive);
  }, [isActive]);

  return(
    <Container>
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
    </Container>
  );
}