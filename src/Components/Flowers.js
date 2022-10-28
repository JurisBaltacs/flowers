import React, { useContext } from "react";
import "./Flowers.css";
import ShopContext from "../Context/ShopContext";
import VectorDown from "../Assets/VectorDown";

const MainMenu = () => {
  const { items, sliderValue } = useContext(ShopContext);

  const itemsFiltered = items.filter((item) => {
    if (item.price < sliderValue[0] || item.price > sliderValue[1]) {
      // Price range check failed
      return false;
    }

    // if (selectedCategories.length && !selectedCategories.includes(item.type)) {
    //   // Category check failed
    //   return false;
    // }

    // Seems that all filter checks was passed
    return true;
  });

  return (
    <div className="content">
      <div className="titles">
        <div className="title__flowers "> New Arrivals </div>
        <div className="title__flowers--sort">
          Sort by price &nbsp; <VectorDown />
        </div>
      </div>
      {itemsFiltered.map((item) => (
        <div className="flowerContainer" key={item.id}>
          <div className="label__flowers--wrapper">
            <div className="label__flowers--type">{item.type}</div>
            <div className="label__flowers--name">{item.name}</div>
          </div>

          <img className="image" src={`/images/${item.picture}`} />
          <div className="label__flowers--price">Price</div>
          <div className="label__flowers--price-amount">$ {item.price}</div>
        </div>
      ))}
    </div>
  );
};

export default MainMenu;
