import React from "react";
import "./Product.css";
const Product = ({ product: { id, name, price, img }, handleAddToList }) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="product-details">
        <p>{name}</p>
        <p>Price: ৳{price}</p>
      </div>
      <div className="btn">
        <button
          className="btn-add-to-list"
          onClick={() => handleAddToList({ id, name, img })}
        >
          ADD TO LIST
        </button>
      </div>
    </div>
  );
};

export default Product;
