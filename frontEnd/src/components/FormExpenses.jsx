import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { controllerBudget } from "../services/request/budget";
export default function FormExpenses() {
  const [categoriesExpenses, setCategoriesExpenses] = useState([]);
  const [expensesTypes, setExpensesTypes] = useState([]);

  function handlerChange(event) {
    /* { [event.target.name]: event.target.value,} */

    console.log(event.target.name, event.target.value);
  }
  useEffect(() => {
    controllerBudget
      .getCategoriesExpenses()
      .then(({ data }) => setCategoriesExpenses(data.data));

    controllerBudget
      .getExpenseTypes()
      .then(({ data }) => setExpensesTypes(data.data));
  }, []);
  console.log(categoriesExpenses);
  function handlerSubmit(event) {}
  return (
    <>
      {expensesTypes && categoriesExpenses ? (
        <div className="mx-auto pt-1 col-12 pl-0 mw-500px justify-content-around">
          <h2 className="mt-4 text-center text-danger">Agregar gasto</h2>
          <form onSubmit={handlerSubmit} id="formIncomes">
            <div className="mb-3">
              <label htmlFor="type_id" className="form-label">
                Tipo de gasto
              </label>
              {expensesTypes ? (
                <select
                  className="form-select"
                  name="type_id"
                  id="expenseType"
                  onChange={handlerChange}
                >
                  <option value={0}>Tipos de gastos</option>
                  {expensesTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.type}
                    </option>
                  ))}
                </select>
              ) : (
                <Skeleton />
              )}
            </div>
            <p className="text-danger" id="errorExpenseType"></p>

            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Monto
              </label>
              <input
                name="amount"
                type="number"
                onChange={handlerChange}
                className="form-control"
                id="amount"
                placeholder="Monto"
                /*  value={createIncome.varied_income} */
              />
            </div>
            <p className="text-danger" id="errorAmount"></p>

            <label htmlFor="categories" className="d-block">
              Categorías
            </label>
            {categoriesExpenses ? (
              <select
                className="form-select"
                name="category_exp_id"
                id="categories"
                onChange={handlerChange}
              >
                <option value={0}>Categorías</option>
                {categoriesExpenses.map((category) => (
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
                /* value={createIncome.description} */
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
}

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
        <Skeleton />
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            <Skeleton />
          </label>
          <Skeleton />
        </div>
        <Skeleton width={50} />
      </form>
    </div>
  );
}
