import React, { useState } from "react";
import List from "../List/List";
import Modal from "react-modal";
import { CgCloseR } from "react-icons/cg";
import "./ListCard.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "250px",
    width: "300px",
    overflow: "auto",
  },
};

Modal.setAppElement("#root");

const ListCard = ({ list, handleChooseAgain, handleDeleteIcon }) => {
  const [modal, setModal] = useState(false);
  const [randomProduct, setRandomProduct] = useState([]);

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function randomChoose() {
    let randomIndex = Math.floor(Math.random() * list.length) || [];
    setRandomProduct(list[randomIndex]);
    openModal();
  }
  return (
    <div className="list-card">
      <h3 className="text-center">Selected Products</h3>

      <div className="list-container">
        {list.map((item) => (
          <List key={item.id} item={item} handleDeleteIcon={handleDeleteIcon} />
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
      <Modal isOpen={modal} onRequestClose={closeModal} style={customStyles}>
        <button className="modal-close-button" onClick={closeModal}>
          <CgCloseR size={25} />
        </button>
        {!randomProduct && (
          <div className="modal-warning">
            <p> List is empty </p>
          </div>
        )}
        {randomProduct && (
          <>
            <h2>This is for you</h2>
            <div className="list">
              <img src={randomProduct.img} alt="" />
              <h5>{randomProduct.name}</h5>
              <h5>৳{randomProduct.price}</h5>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default ListCard;
