import Swal from "sweetalert2";
import { controllerBudget } from "../services/request/budget";
import { Toast } from "./sweetAlertSuccessAndErro";

let errors = {};
export function handlerValidationFromVarIncomes(
  {
    amountIncome,
    categories,
    description,
    errorAmountIncome,
    errorCategories,
    errorDescription,
  },
  createVarIncome,
  setShowVarIncome,
  setIncomesDb,
  setExpenses,
  incomesDb
  // setDataIncome
) {
  //isNaN devuelve true si el parametro NO es un numero
  // por ende si devuelve false ES un numero

  if (createVarIncome.amountIncome == "") {
    errors.amountIncome = "El campo ingreso fijo no puede estar vació";
  } else if (isNaN(createVarIncome.amountIncome)) {
    errors.amountIncome = "El valor debe ser un numero";
  } else {
    if (errors.amountIncome) {
      delete errors.amountIncome;
      amountIncome.classList.remove("is-invalid");
      errorAmountIncome.innerText = "";
    }
  }

  //   if (createVarIncome.varied_income == "") {
  //     errors.varied_income = "El campo ingreso vario no puede estar vació";
  //   } else if (isNaN(createVarIncome.varied_income)) {
  //     errors.varied_income = "El valor debe ser un numero";
  //   } else {
  //     if (errors.varied_income) {
  //       delete errors.varied_income;
  //       varied_income.classList.remove("is-invalid");
  //       errorVaried_income.innerText = "";
  //     }
  //   }

  if (createVarIncome.category_inc_id == "") {
    errors.categories = "Seleccione una categoría";
  } else if (isNaN(createVarIncome.category_inc_id)) {
    errors.categories = "El valor debe ser un numero";
  } else {
    if (errors.categories) {
      delete errors.categories;
      categories.classList.remove("is-invalid");
      errorCategories.innerText = "";
    }
  }

  if (createVarIncome.description == "") {
    errors.description = "El campo descripción no puede estar vació";
  } else if (!(createVarIncome.description.length < 25)) {
    errors.description = "La cantidad de caracteres debe ser menor a 25";
  } else {
    if (errors.description) {
      delete errors.description;
      description.classList.remove("is-invalid");
      errorDescription.innerText = "";
    }
  }
  console.log(errors);
  console.log(incomesDb, "incomesDb en from ingreso fijo");
  if (Object.keys(errors) == 0) {
    //si viene de /home/create_income entra aca
    //de lo contrario si viene con /home/update_inocme va al update
    if (incomesDb) {
      console.log("estoy en update");
      controllerBudget
        .createVarIncome(createVarIncome)
        .then(({ data }) => {
          console.log(data, "data cuando se actualiza");
          if (data.meta.ok) {
            Toast.fire({
              icon: "success",
              title: "Operación Exitosa",
            });

            if (data.meta.ok) {
              setIncomesDb(true);
              setExpenses(true);
              setShowVarIncome(null);
            }
          }
        })
        .catch((err) => {
          if (err.response.data) {
            Toast.fire({
              icon: "error",
              title: err.response.data.msg,
            });
            //escondo el formulario
            setShowVarIncome(null);
          }
        });
    }
  } else {
    console.log("entra al else porqeu hay errores");
    if (errors.amountIncome) {
      errorAmountIncome.innerText = errors.amountIncome;
      amountIncome.classList.add("is-invalid");
    }
    // if (errors.varied_income) {
    //   errorVaried_income.innerText = errors.varied_income;
    //   varied_income.classList.add("is-invalid");
    // }
    if (errors.categories) {
      errorCategories.innerText = errors.categories;
      categories.classList.add("is-invalid");
    }
    if (errors.description) {
      errorDescription.innerText = errors.description;
      description.classList.add("is-invalid");
    }
  }
}
