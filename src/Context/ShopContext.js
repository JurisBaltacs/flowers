import React, { useState, useEffect } from "react";

const ShopContext = React.createContext();

export const ShopContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [sliderValue, setSliderValue] = useState([1, 53]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  useEffect(() => {
    const url = "https://blumlinge2.herokuapp.com/api/smallbouquet/";

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
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

  return (
    <ShopContext.Provider
      value={{
        items,
        sliderValue,
        setSliderValue,
        selectedTypes,
        setSelectedTypes,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
