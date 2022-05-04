import $ from "jquery";
import { controllerBudget } from "../services/request/budget";
import { Toast } from "./sweetAlertSuccessAndErro";

let errors = {};
export default function validationFormEditIncExp(
  {
    amountIncome,
    amountExpense,
    type_id,
    description,
    createdAt,
    errorAmountIncome,
    errorAmountExpense,
    errorTypeExpense_id,
    category_exp_id,
    errorCategory_exp_id,
    category_inc_id,
    errorCategory_inc_id,
    errorDescription,
    errorCreatedAt,
  },
  newEdit,
  closeModal,
  setIncomesDb,
  setExpenses,
  newEditIncExp
) {
  //isNaN devuelve true si el parametro NO es un numero
  // por ende si devuelve false ES un numero

  if (newEdit.type_id == 0) {
    errors.type_id = "Seleccione un tipo de gasto";
  } else {
    if (errors.type_id) {
      delete errors.type_id;
      type_id.classList.remove("is-invalid");
      errorTypeExpense_id.innerText = "";
    }
  }

  if (newEdit.amountExpense == "") {
    errors.amountExpense = "Debe completar el campo gasto";
  } else if (isNaN(newEdit.amountExpense)) {
    errors.amountExpense = "El valor debe ser un numero";
  } else {
    if (errors.amountExpense) {
      delete errors.amountExpense;
      amountExpense.classList.remove("is-invalid");
      errorAmountExpense.innerText = "";
    }
  }

  if (newEdit.amountIncome == "") {
    errors.amountIncome = "Debe completar el campo gasto";
  } else if (isNaN(newEdit.amountIncome)) {
    errors.amountIncome = "El valor debe ser un numero";
  } else {
    if (errors.amountIncome) {
      delete errors.amountIncome;
      amountIncome.classList.remove("is-invalid");
      errorAmountIncome.innerText = "";
    }
  }

  if (newEdit.category_exp_id == 0) {
    errors.category_exp_id = "Seleccione un categoría para el gasto";
  } else {
    if (errors.category_exp_id) {
      delete errors.category_exp_id;
      category_exp_id.classList.remove("is-invalid");
      errorCategory_exp_id.innerText = "";
    }
  }

  if (newEdit.category_inc_id == 0) {
    errors.category_inc_id = "Seleccione un categoría para el gasto";
  } else {
    if (errors.category_inc_id) {
      delete errors.category_inc_id;
      category_inc_id.classList.remove("is-invalid");
      errorCategory_inc_id.innerText = "";
    }
  }

  if (newEdit.description == "") {
    errors.description = "El campo descripción no puede estar vació";
  } else if (!(newEdit.description.length < 25)) {
    errors.description = "La cantidad de caracteres debe ser menor a 25";
  } else {
    if (errors.description) {
      delete errors.description;
      description.classList.remove("is-invalid");
      errorDescription.innerText = "";
    }
  }
  console.log(errors);
  if (Object.keys(errors).length === 0) {
    try {
      console.log("no hay errores");
      console.log(newEdit, "newEdit");
      controllerBudget.editIncomeExpense(newEdit).then(({ data }) => {
        console.log(data);
        if (data.meta.ok) {
          Toast.fire({
            icon: "success",
            title: "Operación Exitosa",
            background: "#F7FFF7",
          });
          closeModal(false);
          setIncomesDb(true);
          setExpenses(true);
          setExpenses(null);
          newEditIncExp(true);
        } else {
          Toast.fire({
            icon: "error",
            title: "Opss ocurrió un error inesperado",
          });
          // setExpenses(null);
        }
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log("hay errores");
    if (errors.type_id) {
      errorTypeExpense_id.innerText = errors.type_id;
      type_id.classList.add("is-invalid");
    }
    if (errors.amountExpense) {
      errorAmountExpense.innerText = errors.amountExpense;
      amountExpense.classList.add("is-invalid");
    }
    if (errors.category_exp_id) {
      errorCategory_exp_id.innerText = errors.category_exp_id;
      category_exp_id.classList.add("is-invalid");
    }
    if (errors.description) {
      // errorDescription.innerText = errors.description;
      errorDescription.innerText = errors.description;
      description.classList.add("is-invalid");
    }
  }
}
