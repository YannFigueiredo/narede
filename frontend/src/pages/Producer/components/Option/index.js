import React from "react";
import { Container, Content } from "./styles";
import AddIcon from "@mui/icons-material/Add";

export default function Option({
  title
}) {
  return(
    <Container>
      <h2>{title}</h2>
      <Content>
        <span>{"Ver mais >"}</span>
      </Content>
      <AddIcon className="add-btn" />
    </Container>
  );
}