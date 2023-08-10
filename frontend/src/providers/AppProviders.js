import React from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";
import TitleProvider from "contexts/TitleContext";

export default function AppProviders({ children }) {
  return (
    <TitleProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </TitleProvider>
  );
}