import React from "react";
export default function Modal({ children, isOpen, closeModal }) {
  return (
    <div className={`modal ${isOpen ? "is-open" : ""}`}>
      <div className="modal-container">
        {children}
        <button
          id="btnRegister"
          className="btn btn-primary modal-close p-2"
          onClick={() => closeModal(false)}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
