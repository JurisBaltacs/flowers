import React, { useState, useCallback } from "react";

const CATEGORIES = [
  "basis",
  "Blume",
  "Winziges Extra",
  "Ovales Gras",
  "Langes Gras",
  "glatt",
];

function ProductFilters(props) {
  const { categories, onFilterChange } = props;

  return (
    <section className="filters" aria-labelledby="filters-header">
      <header id="filters-header">{"Filters"}</header>

      <ul>
        {categories.map((category) => (
          <li key={category}>
            <label>
              <input
                onChange={onFilterChange}
                type="checkbox"
                value={category}
              />
              {category}
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Product(props) {
  const { product } = props;

  return (
    <li key={product.id} className="product">
      <img src={`/images/${product.picture}`} />

      <div className="product-details">
        <header>{product.name}</header>
        <div className="category">{product.category}</div>
      </div>
    </li>
  );
}

function ProductsList(props) {
  const { products } = props;

  return (
    <ul className="products">
      {products.map((product) => (
        <Product product={product} />
      ))}
    </ul>
  );
}

const uniqueTypes = [
  "basis",
  "Blume",
  "Winziges Extra",
  "Ovales Gras",
  "Langes Gras",
  "glatt",
];

export default function App({ uniqueTypes, items }) {
  const [products, setProducts] = useState(items);
  // const [state, setState] = useState({
  //   products: items,

  //   filters: new Set(),
  // });

  const handleFilterChange = useCallback(
    (event) => {
      // setState((previousState) => {
      setProducts((previousState) => {
        let filters = new Set(previousState.filters);
        let products = items;
        if (event.target.checked) {
          filters.add(event.target.value);
        } else {
          filters.delete(event.target.value);
        }

        if (filters.size) {
          products = products.filter((product) => {
            return filters.has(product.type);
          });
        }

        return {
          filters,
          products,
        };
      });
    },
    // [setState]
    [setProducts]
  );

  return (
    <main>
      <ProductFilters
        categories={CATEGORIES}
        onFilterChange={handleFilterChange}
      />
      {/* <ProductsList products={state.products} /> */}
      <ProductsList products={products.products} />
    </main>
  );
}
