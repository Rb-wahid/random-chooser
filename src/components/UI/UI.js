import React from "react";
import { useState, useEffect } from "react";

const UI = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return <div></div>;
};

export default UI;
