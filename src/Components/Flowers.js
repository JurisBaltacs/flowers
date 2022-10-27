import React from "react";
import "./Flowers.css";
import Categories from "./Categories.js";

class MainMenu extends React.Component {
  // constructor(props) {
  // constructor(props) {
  // super(props);
  //
  // this.state = {
  //   items: [],
  //   DataisLoaded: false,
  // };
  // }

  // componentDidMount() {
  //   fetch("https://blumlinge2.herokuapp.com/api/smallbouquet/")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       this.setState({
  //         items: json,
  //         DataisLoaded: true,
  //       });
  //     });
  // }
  render() {
    // const { DataisLoaded, items } = this.state;
    // if (!DataisLoaded)
    //   return (
    //     <div>
    //       <h1> Pleses wait some time.... </h1>
    //     </div>
    //   );

    const items = this.props.items;
    // const uniqueTypes = [...new Set(items.map((item) => item.type))];

    return (
      <div className="content">
        <div className="categories">
          {/* <Categories uniqueTypes={uniqueTypes} /> */}
        </div>
        <div className="titles">
          <div className="title__flowers "> New Arrivals </div>
          <div className="title__flowers--sort">Sort by price </div>
        </div>
        {items.map((item) => (
          <div className="flowerContainer" key={item.id}>
            <div className="label__flowers--type">{item.type}</div>
            <div className="label__flowers--name">{item.name}</div>

            <img className="image" src={`/images/${item.picture}`} />
            <div className="label__flowers--price">Price</div>
            <div className="label__flowers--price-amount">$ {item.price}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default MainMenu;
