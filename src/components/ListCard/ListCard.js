import React from "react";
import List from "../List/List";
import "./ListCard.css";
const ListCard = ({ list, handleChooseAgain }) => {
  function randomChoose() {
      let randomIndex = Math.floor(Math.random() * list.length);
      console.log(list[randomIndex]);
  }
  return (
    <div className="list-card">
      <h3 className="text-center">Selected Products</h3>

      <div className="list-container">
        {list.map((item) => (
          <List key={item.id} item={item} />
        ))}
      </div>

      <div className="btn-group">
        <button className="btn-choose-for-me" onClick={randomChoose}>
          CHOOSE ONE FOR ME
        </button>
        <button className="btn-choose-again" onClick={handleChooseAgain}>
          CHOOSE AGAIN
        </button>
      </div>
    </div>
  );
};

export default ListCard;
