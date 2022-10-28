import React, { useContext, useCallback } from "react";
import ShopContext from "../Context/ShopContext";
import VectorUp from "../Assets/VectorUp";
import VectorDown from "../Assets/VectorDown";
import "./Dropdown.css";

const { useState } = React;

const Dropdown = () => {
  const { items, selectedCategories, setSelectedCategories } =
    useContext(ShopContext);
  const [isOpen, setOpen] = useState(false);

  const uniqueTypes = [...new Set(items.map((item) => item.type))];
  const toggleDropdown = () => setOpen(!isOpen);

  const toggleSelectedType = (type) => {
    if (selectedCategories.includes(type)) {
      setSelectedCategories(selectedCategories.filter((t) => t !== type));
    } else {
      setSelectedCategories([...selectedCategories, type]);
    }
  };

  return (
    <div>
      <div onClick={toggleDropdown}>
        <div className="categories">
          Categories {isOpen ? <VectorUp /> : <VectorDown />}
        </div>

        <div className={`${isOpen && "open"}`}></div>
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        {uniqueTypes.map((type) => (
          <div key={type} className="categories__names">
            <input
              type="checkbox"
              checked={selectedCategories.includes(type)}
              onChange={() => toggleSelectedType(type)}
            />
            <label>{type.charAt(0).toUpperCase() + type.slice(1)}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
