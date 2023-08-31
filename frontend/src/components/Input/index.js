import React from "react";
import { Container, InputWrapper, SearchButton } from "./styles";
import SearchIcon from "@mui/icons-material/Search";

export default function Input({
  width,
  placeholder = "",
  isSearch = false
}) {
  return(
    <Container width={width} isSearch={isSearch}>
      <InputWrapper 
        isSearch={isSearch}
        placeholder={placeholder}
      />
      {isSearch &&
        <SearchButton>
          <SearchIcon />
        </SearchButton>
      }
    </Container>
  );
}