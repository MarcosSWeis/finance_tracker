import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

export default function HandlerButtonsIncomes() {
  const { setShowForm } = useContext(DataContext);
  const { showForm } = useContext(DataContext);

  function clickRotate() {
    const plus = document.querySelector(".plus");
    plus.classList.toggle("rotate");
  }

  return (
    <>
      <div className="d-flex mw-500px m-auto justify-content-center">
        <a className="fab-button" href="">
          <div className="dot"></div>
        </a>
        <div className="fab-options"></div>
        <a
          className="fab-button blue"
          onClick={() => {
            clickRotate();
            !showForm ? setShowForm(true) : setShowForm(null);
          }}
        >
          <div className="plus"></div>
        </a>

        <a className="fab-button pink" href="">
          <div className="menu"></div>
        </a>

        <div className="fab-shadow"></div>
      </div>
      <div className=" d-flex mw-500px m-auto justify-content-center">
        <p></p>
        <p className=" ">Ingreso Fijo</p>
      </div>
    </>
  );
}
