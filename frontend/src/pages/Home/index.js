import React, { useState } from "react";
import { Container } from "../../components/Container/page";
import Intro from "components/Intro";
import MostPopular from "components/MostPopular";
import MostRecent from "components/MostRecent";
import TitleModal from "components/TitleModal";

export default function Home() {
  const [modal, setModal] = useState({cover: ""});
  const [isModalOpen, setIsModalOpen] = useState(false);

  return(
    <Container>
      <Intro />
      <MostPopular />
      <MostRecent />
      <TitleModal 
        cover={modal.cover}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setModal={setModal}
      />
    </Container>
  );
}