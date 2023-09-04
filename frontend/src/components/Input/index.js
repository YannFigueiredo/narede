import React from "react";
import { Container, InputWrapper, SearchButton } from "./styles";
import SearchIcon from "@mui/icons-material/Search";

export default function Input({
  width,
  placeholder = "",
  isSearch = false,
  className
}) {
  return(
    <Container width={width} isSearch={isSearch} className={className}>
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