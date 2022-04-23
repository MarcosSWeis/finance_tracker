import $ from "jquery";
import { controllerBudget } from "../services/request/budget";
import { getColorRandom } from "./getColorRandom";
import { Toast } from "./sweetAlertSuccessAndErro";

let errors = {};
export default function handlerValidationFromExpenses(
  {
    type_id,
    errorExpenseType,
    amount,
    errorAmount,
    category_exp_id,
    errorCategories,
    description,
    errorDescription,
  },
  newExpense,
  setExpenses,
  setShowFormExpense
) {
  //isNaN devuelve true si el parametro NO es un numero
  // por ende si devuelve false ES un numero

  if (newExpense.type_id == 0) {
    errors.type_id = "Seleccione un tipo de gasto";
  } else {
    if (errors.type_id) {
      delete errors.type_id;
      $(type_id).removeClass("is-invalid");
      $(errorExpenseType).text("");
    }
  }

  if (newExpense.amount == "") {
    errors.amount = "Debe completar el campo gasto";
  } else if (isNaN(newExpense.amount)) {
    errors.amount = "El valor debe ser un numero";
  } else {
    if (errors.amount) {
      delete errors.amount;
      $(amount).removeClass("is-invalid");
      $(errorAmount).text("");
    }
  }

  if (newExpense.category_exp_id == 0) {
    errors.category_exp_id = "Seleccione un categoría para el gasto";
  } else {
    if (errors.category_exp_id) {
      delete errors.category_exp_id;
      $(category_exp_id).removeClass("is-invalid");
      $(errorCategories).text("");
    }
  }

  if (newExpense.description == "") {
    errors.description = "El campo descripción no puede estar vació";
  } else if (!(newExpense.description.length < 25)) {
    errors.description = "La cantidad de caracteres debe ser menor a 25";
  } else {
    if (errors.description) {
      delete errors.description;
      $(description).removeClass("is-invalid");
      $(errorDescription).text("");
    }
  }
  console.log(errors);
  if (Object.keys(errors) == 0) {
    try {
      console.log("no hay errores");
      console.log(newExpense, "newExpense");
      controllerBudget.createExpense(newExpense).then(({ data }) => {
        console.log(data);
        if (data.meta.ok) {
          Toast.fire({
            icon: "success",
            title: "Operación Exitosa",
            background: "#F7FFF7",
          });
          //hago esto para avisarle a react que el componente cambio , pero ,lo vuelvo a setear null porque el componente
          // home no se desmonta por ende la variable  global expense se quedaría en true y no actualizaría las métricas
          setExpenses(true);
          setExpenses(null);
          setShowFormExpense(null);
        } else {
          Toast.fire({
            icon: "error",
            title: "Opss ocurrió un error inesperado",
          });
          setExpenses(null);
        }
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log("hay errores");
    if (errors.type_id) {
      $(errorExpenseType).text(errors.type_id);
      $(type_id).addClass("is-invalid");
    }
    if (errors.amount) {
      $(errorAmount).text(errors.amount);
      $(amount).addClass("is-invalid");
    }
    if (errors.category_exp_id) {
      $(errorCategories).text(errors.category_exp_id);
      $(category_exp_id).addClass("is-invalid");
    }
    if (errors.description) {
      // errorDescription.innerText = errors.description;
      $(errorDescription).text(errors.description);
      $(description).addClass("is-invalid");
    }
  }
}
