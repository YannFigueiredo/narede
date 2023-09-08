import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { hqsList } from "utils/mocks/hqsList";
import { titlesList } from "utils/mocks/titlesList";
import { Container } from "components/Container/page";
import { Reader, Content } from "./styles";
import { TitleContext } from "contexts/TitleContext";
import Button from "components/Button";
import TitleModal from "components/TitleModal";

export default function Title() {
  const { id, chap } = useParams();
  const [hq, setHq] = useState({});
  const [title, setTitle] = useState({});
  const [actualChap, setActualChap] = useState({});
  const { setTitleValues, setIsModalOpen } = useContext(TitleContext);
  
  const openModal = () => {
    setTitleValues({
      id: title[0].id,
      title: title[0].title,
      description: title[0].description,
      cover: title[0].cover,
      category: title[0].category,
      author: title[0].author
    });
    setIsModalOpen(true);
  };

  useEffect(() => {
    setHq(hqsList.filter(hq => hq.id === parseInt(id)));
    setTitle(titlesList.filter(title => title.id === parseInt(id)));
  }, []);

  useEffect(() => {
    if(hq.length > 0 && hq[0].chapters)
      setActualChap(hq[0].chapters[chap - 1].url);
  }, [hq]);

  return(
    <Container>
      <TitleModal />
      <Reader>
        <Button 
          onClick={openModal}
          text="Acessar capítulos"
          variant="blue"
        />
        <Content>
          <h2>{hq.length > 0 && hq[0].chapters[chap - 1].name}</h2>
          {Object.values(actualChap).map((page, key) => (
            <img key={key} src={page} alt={`Página ${key + 1}`} />
          ))}
        </Content>
        <Button 
          onClick={() => setIsModalOpen(true)}
          text="Acessar capítulos"
          variant="blue"
        />
      </Reader>
    </Container>
  );
}