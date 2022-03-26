import React from "react";
import { useState, useEffect } from "react";
import ListCard from "../ListCard/ListCard";
import Product from "../Product/Product";
import "./UI.css";
import Modal from "react-modal";
import { CgCloseR } from "react-icons/cg";

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

const UI = () => {
  const [products, setProducts] = useState([]);
  const [list, setList] = useState([]);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(null);

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
    if (newList.length > 4) {
      openModal();
    } else setList(newList);
  }

  function handleChooseAgain() {
    setList([]);
  }

  function handleDeleteIcon(id) {
    let rest = list.filter((item) => item.id !== id);
    setList(rest);
  }

  function openModal() {
    setError(true);
    setModal(true);
  }

  function closeModal() {
    setError(false);
    setModal(false);
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
      <Modal isOpen={modal} onRequestClose={closeModal} style={customStyles}>
        <button className="modal-close-button" onClick={closeModal}>
          <CgCloseR size={25} />
        </button>

        {error && (
          <>
            <h2 className="modal-warning">
              You can to add more than four items
            </h2>
          </>
        )}
      </Modal>
    </div>
  );
};

export default UI;
