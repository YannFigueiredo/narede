import {
  Container,
  Modal,
  Button
} from "./styles";
import { useNavigate } from "react-router-dom";

export default function ModalIntro({
  isEnabled
}) {
  const navigate = useNavigate();

  const login = (profileType) => {
    global.localStorage.setItem("logged", "true");
    global.localStorage.setItem("profile", profileType);

    if (global.window.location.pathname === "/") {
      global.window.location.reload();
    } else {
      navigate("/");
    }
  };

  return(
    <Container isEnabled={isEnabled}>
      <Modal>
        <Button onClick={() => login('leitor')}>
          Leitor
        </Button>
        <Button onClick={() => login('artista')}>
          Artista
        </Button>
      </Modal>
    </Container>
  );
};