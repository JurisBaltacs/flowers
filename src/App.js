import React from "react";
import "./App.css";
import Flowers from "../src/Components/Flowers";
import PriceRange from "./Components/PriceRange";
import { ShopContextProvider } from "../src/Context/ShopContext";
import Dropdown from "../src/Components/Dropdown";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#494F55",
    },
  },
});

function App() {
  return (
    <ShopContextProvider>
      <ThemeProvider theme={theme}>
        <div className="content-wrapper">
          <div className="title__main-page">Blume</div>
          <div className="menu__left">
            <div className="blank"></div>
            <Dropdown />
            <PriceRange />
          </div>
          <Flowers />
        </div>
      </ThemeProvider>
    </ShopContextProvider>
  );
}

export default App;
