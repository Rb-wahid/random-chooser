import React from "react";
import { BsHandIndexThumb } from "react-icons/bs";
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
          <div>ADD TO LIST</div>
          <BsHandIndexThumb className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Product;
