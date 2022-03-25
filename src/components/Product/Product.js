import React from 'react';
import './Product.css'
const Product = ({ product:{name, price, img} }) => {
    
    return (
      <div>
        <img src={img} alt="" />
        <p>{name}</p>
        <p>Price: ৳{price}</p>
        <button>ADD TO LIST</button>
      </div>
    );
};

export default Product;