import React from "react";
import { styled } from "styled-components";
import AppProviders from "./providers/AppProviders";

const Text = styled.h1 `
  color: ${({theme}) => theme.colors.primary};
`;

function App() {
  return (
    <AppProviders>
      
    </AppProviders>
  );
}

export default App;
