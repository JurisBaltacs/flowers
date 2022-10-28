import React, { useContext } from "react";
import "./Flowers.css";
import ShopContext from "../Context/ShopContext";
import VectorDown from "../Assets/VectorDown";

const MainMenu = () => {
  const items = useContext(ShopContext);

  return (
    <div className="content">
      <div className="titles">
        <div className="title__flowers "> New Arrivals </div>
        <div className="title__flowers--sort">
          Sort by price &nbsp; <VectorDown />
        </div>
      </div>
      {items.map((item) => (
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
