import React from "react";
import "./List.css";

const List = ({ item: { name, img } }) => {
  console.log(name, img);
  return (
    <div className="list">
      <img src={img} alt="" />
      <h5>{name}</h5>
    </div>
  );
};

export default List;
