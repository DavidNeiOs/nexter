import React from "react";
import { ThemeProvider } from "styled-components";
import { Base, theme } from "./theme";
import { Container, Sidebar, Header, Footer } from "./layout";
import { Home } from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Base />
      <Container>
        <Sidebar>Sidebar</Sidebar>
        <Header>Header</Header>
        <Home />
        <Footer>Footer</Footer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
