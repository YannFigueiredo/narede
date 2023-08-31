import React from "react";
import { Container } from "../../components/Container/page";
import MainSlide from "./components/MainSlide";
import Intro from "components/Intro";
import MostPopular from "components/MostPopular";
import MostRecent from "components/MostRecent";
import TitleModal from "components/TitleModal";
import ForumIcon from "@mui/icons-material/Forum";
import { Chat } from "./styles";

export default function Home() {
  return(
    <Container>
      <Intro />
      <MainSlide />
      <MostRecent />
      <MostPopular />
      <TitleModal />
      <Chat>
        <ForumIcon />
      </Chat>
    </Container>
  );
}