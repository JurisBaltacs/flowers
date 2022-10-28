import React, { useState, useEffect } from "react";
import "./App.css";
import Flowers from "../src/Components/Flowers";
import PriceRange from "./Components/PriceRange";
import App from "./Components/test";
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

function AppOriginal() {
  return (
    <ShopContextProvider>
      <ThemeProvider theme={theme}>
        <div className="content-wrapper">
          {/* <App uniqueTypes={uniqueTypes} items={items} /> */}
          <div className="title">Blume</div>
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

export default AppOriginal;
