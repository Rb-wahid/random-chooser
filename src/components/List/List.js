import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import "./List.css";

const List = ({ item: { name, img } }) => {
  return (
    <div className="list">
      <img src={img} alt="" />
      <h5>{name}</h5>
      <AiOutlineDelete className="icon-delete" />
    </div>
  );
};

export default List;
