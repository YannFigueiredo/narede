import React from "react";
import { Container, InputWrapper, SearchButton } from "./styles";
import SearchIcon from "@mui/icons-material/Search";

export default function Input({
  width,
  placeholder = "",
  isSearch = false,
  className,
  onChange,
  onClick,
  onKeyDown
}) {
  return(
    <Container width={width} isSearch={isSearch} className={className}>
      <InputWrapper 
        isSearch={isSearch}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {isSearch &&
        <SearchButton>
          <SearchIcon onClick={onClick} />
        </SearchButton>
      }
    </Container>
  );
}