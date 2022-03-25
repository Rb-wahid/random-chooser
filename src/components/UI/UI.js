import React from "react";
import { useState, useEffect } from "react";
import ListCard from "../ListCard/ListCard";
import Product from "../Product/Product";
import "./UI.css";

const UI = () => {
  const [products, setProducts] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function handleAddToList(product) {
    let newList = [...list, product];
    setList(newList);
  }

  return (
    <div className="container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToList={handleAddToList}
          />
        ))}
      </div>
      <div>
        <ListCard list={list} />
      </div>
    </div>
  );
};

export default UI;
