import Swal from "sweetalert2";
import { controllerBudget } from "../services/request/budget";

let errors = {};
export function handlerValidationFormIncome(
  {
    fixed_income,
    varied_income,
    categories,
    description,
    errorFixed_income,
    errorVaried_income,
    errorCategories,
    errorDescription,
  },
  createIncome,
  setShowForm,
  setIncomesDb,
  incomesDb,
  setDataIncome
) {
  //isNaN devuelve true si el parametro NO es un numero
  // por ende si devuelve false ES un numero

  if (createIncome.fixed_income == "") {
    errors.fixed_income = "El campo ingreso fijo no puede estar vació";
  } else if (isNaN(createIncome.fixed_income)) {
    errors.fixed_income = "El valor debe ser un numero";
  } else {
    if (errors.fixed_income) {
      delete errors.fixed_income;
      fixed_income.classList.remove("is-invalid");
      errorFixed_income.innerText = "";
    }
  }

  //   if (createIncome.varied_income == "") {
  //     errors.varied_income = "El campo ingreso vario no puede estar vació";
  //   } else if (isNaN(createIncome.varied_income)) {
  //     errors.varied_income = "El valor debe ser un numero";
  //   } else {
  //     if (errors.varied_income) {
  //       delete errors.varied_income;
  //       varied_income.classList.remove("is-invalid");
  //       errorVaried_income.innerText = "";
  //     }
  //   }

  if (createIncome.category_inc_id == "") {
    errors.categories = "Seleccione una categoría";
  } else if (isNaN(createIncome.category_inc_id)) {
    errors.categories = "El valor debe ser un numero";
  } else {
    if (errors.categories) {
      delete errors.categories;
      categories.classList.remove("is-invalid");
      errorCategories.innerText = "";
    }
  }

  if (createIncome.description == "") {
    errors.description = "El campo descripción no puede estar vació";
  } else if (!(createIncome.description.length < 25)) {
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
        .updateIncome(createIncome)
        .then(({ data }) => {
          console.log(data, "data cuando se actualiza");
          if (data.meta.ok) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 2000,
            });
            setIncomesDb(data.meta.ok);
            setDataIncome(data.data);
            setShowForm(null);
          }
        })
        .catch((err) => {
          if (err.response.data) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err.response.data.msg,
              footer: "Gracias y disculpe las molestias",
            });
            //escondo el formulario
            setShowForm(null);
          }
        });
    } else {
      controllerBudget
        .createFixedIncomes(createIncome)
        .then(({ data }) => {
          console.log(data, "DATACUANDO SE CREA");
          if (data.meta.ok) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 2000,
            });
          }
          setIncomesDb(data.meta.ok);
          setDataIncome(data.data);
          setShowForm(null);
        })
        .catch((err) => {
          console.log(err.response.data);
          if (err.response.data) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err.response.data.msg,
              footer: "Gracias y disculpe las molestias",
            });
            //escondo el formulario
            setShowForm(null);
          }
        });
    }
  } else {
    console.log("entra al else porqeu hay errores");
    if (errors.fixed_income) {
      errorFixed_income.innerText = errors.fixed_income;
      fixed_income.classList.add("is-invalid");
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
