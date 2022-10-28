import React, { useContext } from "react";
import ShopContext from "../Context/ShopContext";
import VectorUp from "../Assets/VectorUp";
import VectorDown from "../Assets/VectorDown";
import "./Dropdown.css";

const { useState } = React;

const Dropdown = () => {
  const { items, selectedTypes, setSelectedTypes } = useContext(ShopContext);
  const [isOpen, setOpen] = useState(false);

  const uniqueTypes = [...new Set(items.map((item) => item.type))];
  const toggleDropdown = () => setOpen(!isOpen);

  const toggleSelectedType = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
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
              checked={selectedTypes.includes(type)}
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
