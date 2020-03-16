import React from "react";
import { ThemeProvider } from "styled-components";
import { Base, theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Base />
      <div>Hello Nexter!</div>
    </ThemeProvider>
  );
}

export default App;
