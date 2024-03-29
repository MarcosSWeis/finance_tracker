import React, { useContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

import { handlerValidationFormIncome } from "../helpers/handler-validation-form-income";
import { DataContext } from "../context/DataContext";
import { controllerBudget } from "../services/request/budget";
const initialFixedIncome = {
  fixed_income: "",
  varied_income: "",
  category_inc_id: "",
  description: "",
};
export default function FormIncomes({ setDataIncome }) {
  const { setShowForm, setIncomesDb, incomesDb } = useContext(DataContext);
  const [categories, setCategories] = useState(null);
  const [createIncome, setCreateIncome] = useState(initialFixedIncome);

  //con newIncome al insertar un ingreso fijo, esta se pone true y avida a una funcion/companente que
  //tiene que hacer un pedido a la db porque hay data nueva asi la mantego actualizada en tiempo real

  function handlerChange(event) {
    setCreateIncome({
      ...createIncome,
      [event.target.name]: event.target.value,
    });

    console.log(event.target.name, event.target.value);
  }
  function handlerSubmit(event) {
    event.preventDefault();
    const fixed_income = document.getElementById("fixed_income");
    const errorFixed_income = document.getElementById("errorFixed_income");
    // const varied_income = document.getElementById("varied_income");
    // const errorVaried_income = document.getElementById("errorVaried_income");
    const categories = document.getElementById("categories");
    const errorCategories = document.getElementById("errorCategories");
    const description = document.getElementById("description");
    const errorDescription = document.getElementById("errorDescription");

    let fieldsToValidate = {
      fixed_income,
      // varied_income,
      categories,
      description,
      errorFixed_income,
      // errorVaried_income,
      errorCategories,
      errorDescription,
    };
    handlerValidationFormIncome(
      fieldsToValidate,
      createIncome,
      setShowForm,
      setIncomesDb,
      incomesDb,
      setDataIncome
    );
  }

  useEffect(() => {
    controllerBudget.getCategoriesIncome().then((response) => {
      setCategories(response.data.data);
    });
    //si existe incomesDb quiere decir que ya tiene un ingreso fijo , por lo tanto cuando cargo el formulario lo relleno
    //con esos datos
    if (incomesDb) {
      controllerBudget.getIncomesDb().then(({ data }) => {
        setCreateIncome(data.data[0]);
      });
    }
  }, []);

  return (
    <>
      {categories ? (
        <div className="mx-auto pt-1 col-12 pl-0 mw-500px justify-content-around">
          {incomesDb ? (
            <h2 className="mt-4 text-center colorCeleste">Editar Ingreso</h2>
          ) : (
            <h2 className="mt-4 text-center colorCeleste">Crear ingreso</h2>
          )}
          <form onSubmit={handlerSubmit} id="formIncomes">
            <div className="mb-3">
              <label htmlFor="fixed_income" className="form-label">
                Ingreso fijo
              </label>
              <input
                name="fixed_income"
                type="number"
                onChange={handlerChange}
                className="form-control"
                id="fixed_income"
                placeholder="Ingreso Fijo"
                value={createIncome.fixed_income}
              />
            </div>
            <p className="text-danger" id="errorFixed_income"></p>

            <label htmlFor="categories" className="d-block">
              Categorías
            </label>

            {categories ? (
              <select
                className="form-select"
                name="category_inc_id"
                id="categories"
                onChange={handlerChange}
              >
                <option value={0}>Categorías</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.category}
                  </option>
                ))}
              </select>
            ) : (
              <Skeleton />
            )}
            <p className="text-danger" id="errorCategories"></p>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Descripción
              </label>
              <input
                name="description"
                type="text"
                onChange={handlerChange}
                className="form-control"
                id="description"
                placeholder="Descripción"
                value={createIncome.description}
              />
            </div>
            <p className="text-danger" id="errorDescription"></p>

            <button type="submit" id="btnRegister" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </div>
      ) : (
        loader()
      )}
    </>
  );

  function loader() {
    return (
      <div className="mx-auto pt-1 col-12 pl-0 mw-500px justify-content-around">
        <h2 className="mt-4 text-center text-danger">
          <Skeleton />
        </h2>
        <form id="formIncomes">
          <div className="mb-3">
            <label htmlFor="type_id" className="form-label">
              <Skeleton />
            </label>

            <Skeleton />
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              <Skeleton />
            </label>
          </div>
          <label htmlFor="categories" className="d-block">
            <Skeleton />
          </label>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              <Skeleton />
            </label>
            <Skeleton />
          </div>
          <Skeleton width={80} />
        </form>
      </div>
    );
  }
}
