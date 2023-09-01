import React, { useState, useEffect } from "react";
import { Container } from "./styles";

export default function List({ list, isHistoric = false }) {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    setItemsList(Array.isArray(list) ? list : []);
  }, [list]);

  return(
    <Container>
      <thead>
        <tr>
          <th>Nome do Mangá</th>
          <th>{isHistoric ? "Visto em" : "Adicionado em"}</th>
        </tr>
      </thead>
      <tbody>
        {itemsList.map((favorite, key) => (
          <tr key={key}>
            <td>{favorite.title}</td>
            <td>{favorite.date}</td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
}