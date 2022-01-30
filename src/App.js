import React, { useContext } from "react";
import "./App.scss";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import Routing from "./routes";
import FavoritesProvider from "./contexts/FavoritesContext";

function App() {
  return (
    <FavoritesProvider>
      <ThemeProvider theme={theme}>
        <Routing />
      </ThemeProvider>
    </FavoritesProvider>
  );
}

export default App;
