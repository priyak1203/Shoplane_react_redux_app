import React from "react";
import "./modal.css";

const Modal = ({ showModal, closeModal }) => {
  console.log("Inside Modal", showModal);
  return (
    <div className={showModal ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <h3>Your Cart is Empty. Please add some products.</h3>
        <button className="btn-close-modal" onClick={() => closeModal()}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
