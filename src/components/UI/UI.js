import React from "react";
import { useState, useEffect } from "react";
import ListCard from "../ListCard/ListCard";
import Product from "../Product/Product";
import "./UI.css";

const UI = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container">
      <div className="product-container">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div>
        <ListCard />
      </div>
    </div>
  );
};

export default UI;
