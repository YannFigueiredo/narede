import React from "react";
import { Container, InputWrapper } from "./styles";
import SearchIcon from '@mui/icons-material/Search';

export default function Input({
  width,
  placeholder = "",
  isSearch = false
}) {
  return(
    <Container width={width} tabIndex="0">
      <InputWrapper 
        placeholder={placeholder}
      />
      {isSearch &&
        <SearchIcon />
      }
    </Container>
  );
}