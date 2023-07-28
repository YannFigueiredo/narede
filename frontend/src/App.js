import React from "react";
import AppProviders from "./providers/AppProviders";
import RoutesApp from "./routes";

function App() {
  return (
    <AppProviders>
      <RoutesApp />
    </AppProviders>
  );
}

export default App;
