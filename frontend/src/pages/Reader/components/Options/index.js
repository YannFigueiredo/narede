import React from "react";
import { 
  Container,
  PictureConfig,
  Configuration,
  Label
} from "./styles";
import Button from "components/Button";
import GenericPicture from "assets/images/generic-user.png";

export default function Options() {
  return(
    <Container>
      <PictureConfig>
        <img src={GenericPicture} alt="Foto do usuário" />
        <div>
          <Button 
            text="Escolher arquivo"
            variant="gray"
            freeSize={false}
            width={"content"}
          />
          <Button 
            text="Enviar"
            variant="blue"
            freeSize={false}
            width={"content"}
          />
        </div>
      </PictureConfig>
      <Configuration>
        <Label className="option-label">Mudar nome de exibição</Label>
        <span></span>
        <span className="option-label">Nome de exibição atual</span> 
        <span>FulanoDetal</span>
        <span className="option-label">
          Novo nome de exibição
        </span>
        <input type="text" />
        <Button 
          text="Confirmar"
          variant="blue"
          freeSize={false}
          width={"content"}
        />
      </Configuration>
      <Configuration>
        <Label className="option-label">Alterar e-mail</Label>
        <span></span>
        <span className="option-label">E-mail atual</span> 
        <span>fulanodetal@gmail.com</span>
        <span className="option-label">
          Novo e-mail
        </span>
        <input type="text" />
        <Button 
          text="Confirmar"
          variant="blue"
          freeSize={false}
          width={"content"}
        />
      </Configuration>
      <Configuration>
        <Label className="option-label">Alterar senha</Label>
        <span></span>
        <span className="option-label">
          Senha atual
        </span>
        <input type="text" />
        <span className="option-label">
          Nova senha
        </span>
        <input type="text" />
        <span className="option-label">
          Senha de confirmação
        </span>
        <input type="text" />
        <Button 
          text="Confirmar"
          variant="blue"
          freeSize={false}
          width={"content"}
        />
      </Configuration>
    </Container>
  );
}