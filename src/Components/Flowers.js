import React, { useContext, useState, useEffect } from "react";
import "./Flowers.css";
import ShopContext from "../Context/ShopContext";
import VectorDown from "../Assets/VectorDown";
import VectorUp from "../Assets/VectorUp";

const Flowers = () => {
  const { items, sliderValue, selectedTypes } = useContext(ShopContext);
  const [isSortedDescending, setIsSortedDescending] = useState(false);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    setSortedData(items);
  }, []);

  // Sorting by name while provided prices are the same.
  const handleSort = () => {
    const sortedItems = [...items].sort((a, b) => {
      if (isSortedDescending) {
        return a.name > b.name ? 1 : -1;
      } else {
        return a.name > b.name ? -1 : 1;
      }
    });
    setIsSortedDescending(!isSortedDescending);
    setSortedData(sortedItems);
  };

  const itemsFiltered = sortedData.filter((item) => {
    if (item.price < sliderValue[0] || item.price > sliderValue[1]) {
      return false;
    }
    if (selectedTypes.length && !selectedTypes.includes(item.type)) {
      return false;
    }
    return true;
  });

  return (
    <div className="content">
      <div className="titles">
        <div className="title__flowers "> New Arrivals </div>
        <div
          className="title__flowers--sort"
          onClick={() => {
            handleSort();
          }}
        >
          Sort by price &nbsp;
          {isSortedDescending ? <VectorUp /> : <VectorDown />}
        </div>
      </div>
      {itemsFiltered.map((item) => (
        <div className="flowerContainer" key={item.id}>
          <div className="label__flowers--wrapper">
            <div className="label__flowers--type">
              {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
            </div>
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

export default Flowers;
