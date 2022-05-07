import React, { useContext } from "react";
import Swal from "sweetalert2";
import { DataContext } from "../context/DataContext";
import { controllerBudget } from "../services/request/budget";

export default function ButtonRowDelete({ id }) {
  const { setExpenses } = useContext(DataContext);

  function handlerDelete() {
    Swal.fire({
      title: "¿Esta seguro que desea eliminar esa campo?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, estoy seguro",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        controllerBudget
          .deleteIncomeExpenses({ expenseIncome_id: id })
          .then(({ data }) => {
            console.log(data);
            if (data.meta.ok) {
              Swal.fire(
                `Eliminado!, el monto se elimino correctamente , success`
              );
              //hago que se se actualice todo lo del home
              setExpenses(true);
              setExpenses(false);
            } else {
              Swal.fire(
                `Upps!, el monto no pudo eliminarse correctamente, success`,
                "error"
              );
            }
          });
      }
    });
  }
  return (
    <button
      type="button"
      className="btnDeleteRowExpense w-100 p-0"
      onClick={handlerDelete}
    >
      Eliminar
    </button>
  );
}
