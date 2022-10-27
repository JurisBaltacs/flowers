import React from "react";
import "./App.css";
import Flowers from "../src/Components/Flowers";
import Categories from "./Components/Categories";
import PriceRange from "./Components/PriceRange";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://blumlinge2.herokuapp.com/api/smallbouquet/")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>
        </div>
      );
    const uniqueTypes = [...new Set(items.map((item) => item.type))];

    return (
      <div className="content-wrapper">
        <div className="blume">Blume</div>
        <div>
          <div className="blank">Blank</div>
          <Categories uniqueTypes={uniqueTypes} /> <PriceRange />
        </div>
        <Flowers items={items} />
      </div>
    );
  }
}

export default App;
