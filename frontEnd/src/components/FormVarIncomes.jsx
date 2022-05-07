import React, { useContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

import { DataContext } from "../context/DataContext";
import { handlerValidationFromVarIncomes } from "../helpers/handlerValidationFromVarIncomes";
import { controllerBudget } from "../services/request/budget";
const initialFixedIncome = {
  amountIncome: "",
  category_inc_id: "",
  description: "",
  // type_inc_id: ""
};
export default function FormVarIncomes() {
  const { setShowVarIncome, setIncomesDb, setExpenses, incomesDb } =
    useContext(DataContext);
  const [categories, setCategories] = useState(null);
  const [createVarIncome, setCreateVarIncome] = useState(initialFixedIncome);

  //con newIncome al insertar un ingreso fijo, esta se pone true y avida a una funcion/companente que
  //tiene que hacer un pedido a la db porque hay data nueva asi la mantego actualizada en tiempo real

  function handlerChange(event) {
    setCreateVarIncome({
      ...createVarIncome,
      [event.target.name]: event.target.value,
    });

    console.log(event.target.name, event.target.value);
  }
  function handlerSubmit(event) {
    event.preventDefault();
    const amountIncome = document.getElementById("amountIncome");
    const errorAmountIncome = document.getElementById("errorAmountIncome");
    // const varied_income = document.getElementById("varied_income");
    // const errorVaried_income = document.getElementById("errorVaried_income");
    const categories = document.getElementById("categories");
    const errorCategories = document.getElementById("errorCategories");
    const description = document.getElementById("description");
    const errorDescription = document.getElementById("errorDescription");

    let fieldsToValidate = {
      amountIncome,
      categories,
      description,
      errorAmountIncome,
      errorCategories,
      errorDescription,
    };
    handlerValidationFromVarIncomes(
      fieldsToValidate,
      createVarIncome,
      setShowVarIncome,
      setIncomesDb,
      setExpenses,
      incomesDb
      // setDataIncome
    );
  }

  useEffect(() => {
    controllerBudget.getCategoriesIncome().then((response) => {
      setCategories(response.data.data);
    });
    //si existe incomesDb quiere decir que ya tiene un ingreso fijo , por lo tanto cuando cargo el formulario lo relleno
    //con esos datos
    // if (incomesDb) {
    //   controllerBudget.getIncomesDb().then(({ data }) => {
    //     setCreateVarIncome(data.data[0]);
    //   });
    // }
  }, []);

  return (
    <>
      {incomesDb && categories ? (
        <div className="mx-auto pt-1 col-12 pl-0 mw-500px justify-content-around">
          <h2 className="mt-4 text-center colorCeleste">
            Crear nuevo ingreso vario
          </h2>
          <form onSubmit={handlerSubmit} id="formIncomes">
            <div className="mb-3">
              <label htmlFor="amountIncome" className="form-label">
                Ingreso vario
              </label>
              <input
                name="amountIncome"
                type="number"
                onChange={handlerChange}
                className="form-control"
                id="amountIncome"
                placeholder="Ingreso vario"
                value={createVarIncome.amountIncome}
              />
            </div>
            <p className="text-danger" id="C"></p>

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
                value={createVarIncome.description}
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
