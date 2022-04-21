import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
export default function HandlerButtonsIncomes() {
  const { setShowForm, incomesDb, showForm } = useContext(DataContext);

  function clickRotate() {
    const plus = document.querySelector(".plus");
    plus.classList.toggle("rotate");
  }
  //dependiendo si la api del back me dice que ya tiene un ingreso fijo en la Db
  //muestro o no las cosas del home
  return (
    <>
      <div className="d-flex mw-500px m-auto justify-content-center text-center">
        {incomesDb ? (
          <div className="">
            <a
              className="fab-button"
              onClick={() => {
                clickRotate();
                !showForm ? setShowForm(true) : setShowForm(null);
              }}
            >
              <div className="dot"></div>
            </a>

            <p>Editar ingreso</p>
          </div>
        ) : (
          <div className="mw-500px m-auto justify-content-center">
            <a
              to={"home/create_income"}
              className="fab-button blue"
              onClick={() => {
                clickRotate();
                !showForm ? setShowForm(true) : setShowForm(null);
              }}
            >
              <div className="plus"></div>
            </a>
            <p className="">Ingreso Fijo</p>
          </div>
        )}
      </div>
    </>
  );
}
