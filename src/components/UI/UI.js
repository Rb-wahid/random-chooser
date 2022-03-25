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
    let newList = list.slice();
    let isExit = newList.find((item) => item.id === product.id);
    if (!isExit) {
      newList.push(product);
    }
    setList(newList);
  }

  function handleChooseAgain() {
    setList([]);
  }

  function handleDeleteIcon(id) {
    let rest = list.filter((item) => item.id !== id);
    setList(rest);
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
        <ListCard
          list={list}
          handleChooseAgain={handleChooseAgain}
          handleDeleteIcon={handleDeleteIcon}
        />
      </div>
    </div>
  );
};

export default UI;
