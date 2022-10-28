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
  const [value, setValue] = React.useState([1, 8]);
  const items = useContext(ShopContext);

  const pricesArray = items.map((item) => item.price);

  let min = Math.min(...pricesArray);
  let max = Math.max(...pricesArray);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="price-range">
      <div className="title__price-range">Price range</div>
      <img className="bar-chart" src={Barchart} />
      <Box sx={{ width: 300 }}>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="on"
          getAriaValueText={valuetext}
          valueLabelFormat={(value) => <div>$ {value}</div>}
          color="primary"
          min={min}
          max={max}
        />
      </Box>
    </div>
  );
}
