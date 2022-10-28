import React, { useState, useEffect } from "react";

const ShopContext = React.createContext();

export const ShopContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  useEffect(() => {
    const url = "https://blumlinge2.herokuapp.com/api/smallbouquet/";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setItems(json);
        setDataIsLoaded(true);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  if (!dataIsLoaded)
    return (
      <div>
        <h1> Fetching data.... </h1>
      </div>
    );
  const uniqueTypes = [...new Set(items.map((item) => item.type))];

  return <ShopContext.Provider value={items}>{children}</ShopContext.Provider>;
};

export default ShopContext;
