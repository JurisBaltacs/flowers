import React from "react";
import "./Categories.css";
import Checkbox from "./Checkbox";

class Categories extends React.Component {
  uniqueTypes = this.props.uniqueTypes;

  render() {
    return (
      <div className="categories">
        Categories
        {this.uniqueTypes.map((type, index) => (
          <div key={index} className="categories__names">
            <Checkbox />
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
