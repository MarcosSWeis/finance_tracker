import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
export default function HandlerButtonsIncomes() {
  const {
    setShowForm,
    incomesDb,
    showForm,
    setShowFormExpense,
    showFormExpense,
  } = useContext(DataContext);

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
          <div className="d-flex w-75 m-auto justify-content-around ">
            <div className="">
              <a
                className="fab-button"
                onClick={() => {
                  if (showFormExpense) {
                    setShowFormExpense(null);
                    setShowForm(true);
                  }
                  if (!showForm) {
                    setShowForm(true);
                  } else {
                    setShowForm(null);
                  }
                }}
              >
                <div className="dot"></div>
              </a>

              <p>Ingreso Fijo</p>
            </div>
            <div className="">
              <div
                className="fab-button bg-danger"
                onClick={() => {
                  if (showForm) {
                    setShowForm(null);
                    setShowFormExpense(true);
                  }
                  if (!showFormExpense) {
                    setShowFormExpense(true);
                  } else {
                    setShowFormExpense(null);
                  }
                }}
              >
                <img
                  className="w-35px mt-13px "
                  src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png"
                />
              </div>

              <p>Agregar gasto</p>
            </div>
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
            <p className="">Agregar ingreso</p>
          </div>
        )}
      </div>
    </>
  );
}
