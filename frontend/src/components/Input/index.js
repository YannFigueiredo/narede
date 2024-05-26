import React from "react";
import { Container, Main, InputWrapper, SearchButton } from "./styles";
import SearchIcon from "@mui/icons-material/Search";

export default function Input({
  maxwidth,
  placeholder = "",
  isSearch = false,
  className,
  onChange,
  onClick,
  onKeyDown
}) {
  return(
    <Container maxwidth={maxwidth} isSearch={isSearch}>
      <Main className={className}>
        <InputWrapper 
          isSearch={isSearch}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className="input-wrapper"
        />
        {isSearch &&
          <SearchButton className="search-button">
            <SearchIcon onClick={onClick} />
          </SearchButton>
        }
      </Main>
    </Container>
  );
}