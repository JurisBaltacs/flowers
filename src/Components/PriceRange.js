import React, { useContext } from "react";
import ShopContext from "../Context/ShopContext";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Barchart from "../Assets/Barchart.png";
import "./PriceRange.css";

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider() {
  const { items, sliderValue, setSliderValue } = useContext(ShopContext);
  const pricesArray = items.map((item) => item.price);

  let min = Math.min(...pricesArray);
  let max = Math.max(...pricesArray);

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };
  return (
    <div className="price-range">
      <div className="title__price-range">Price range</div>
      <img className="bar-chart" src={Barchart} />
      <Box sx={{ width: 300 }}>
        <Slider
          value={sliderValue}
          onChange={handleChange}
          valueLabelDisplay="on"
          getAriaValueText={valuetext}
          valueLabelFormat={(sliderValue) => <div>${sliderValue}</div>}
          color="primary"
          // Set the min / max values of the slider to whatever are the min / max
          // values of the prices. Use when prices have varying values.
          // min={min}
          // max={max}
        />
      </Box>
    </div>
  );
}
