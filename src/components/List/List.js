import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import "./List.css";

const List = ({ item: { id, name, img }, handleDeleteIcon }) => {
  return (
    <div className="list">
      <img src={img} alt="" />
      <h5>{name}</h5>
      <AiOutlineDelete
        className="icon-delete"
        onClick={() => handleDeleteIcon(id)}
      />
    </div>
  );
};

export default List;
