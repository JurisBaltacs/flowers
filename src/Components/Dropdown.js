import React, { useContext } from "react";
import ShopContext from "../Context/ShopContext";
import VectorUp from "../Assets/VectorUp";
import VectorDown from "../Assets/VectorDown";
import "./Dropdown.css";

const { useState } = React;

const Dropdown = () => {
  const items = useContext(ShopContext);
  const [isOpen, setOpen] = useState(false);

  const uniqueTypes = [...new Set(items.map((item) => item.type))];

  const toggleDropdown = () => setOpen(!isOpen);

  return (
    <div>
      <div onClick={toggleDropdown}>
        {isOpen ? (
          <div className="categories">
            Categories <VectorUp />
          </div>
        ) : (
          <div className="categories">
            Categories <VectorDown />
          </div>
        )}
        <div className={`${isOpen && "open"}`}></div>
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        {uniqueTypes.map((item, index) => (
          <div className="categories__names" key={index}>
            <input type="checkbox" />
            <label>{item.charAt(0).toUpperCase() + item.slice(1)}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
