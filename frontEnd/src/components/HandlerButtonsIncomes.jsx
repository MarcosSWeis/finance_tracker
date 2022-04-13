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
  //dependiendo si la api del back me dice que ya tiene un ingreso fijo en la Db
  //muestro o no las cosas del home
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
      </div>
      <div className=" d-flex mw-500px m-auto justify-content-center">
        <p className="ml-16px">Editar ingreso fijo</p>
        <p className="ml-16px">Ingreso Fijo</p>
      </div>
    </>
  );
}
