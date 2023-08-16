import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hqsList } from "utils/mocks/hqsList";
import { Container } from "components/Container/page";
import { Reader } from "./styles";

export default function Title() {
  const { id, chap } = useParams();
  const [hq, setHq] = useState({});
  const [actualChap, setActualChap] = useState({});

  useEffect(() => {
    setHq(hqsList.filter(hq => hq.id === parseInt(id)));
  }, []);

  useEffect(() => {
    console.log(hq);
    console.log(chap);

    if(hq.length > 0 && hq[0].chapters)
      setActualChap(hq[0].chapters[chap - 1].url);
  }, [hq]);

  useEffect(() => {
    console.log(actualChap);
  }, [actualChap]);

  return(
    <Container>
      <Reader>
        {Object.values(actualChap).map((page, key) => (
          <img key={key} src={page} alt={`Página ${key + 1}`} />
        ))}
      </Reader>
    </Container>
  );
}