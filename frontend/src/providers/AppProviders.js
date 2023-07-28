import React from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";

export default function AppProviders({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}