import $ from "jquery";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import transformDate from "../helpers/transformDate";
import validationFormEditIncExp from "../helpers/validation-form-edit-inc-exp";
import { useNewEdit } from "../hooks/useNewEdit";
import { controllerBudget } from "../services/request/budget";
export default function AlertEditModal({
  amountExpense,
  amountIncome,
  createdAt,
  description,
  typeExpense,
  categoryExpense,
  categoryIncome,
  id,
  categoryExpenseId,
  categoryIncomeId,
  typeExpenseId,
  isOpen,
  closeModal,
}) {
  const initialValues = {
    amountExpense,
    amountIncome,
    createdAt,
    description,
    type_id: typeExpenseId,
    category_exp_id: categoryExpenseId,
    category_inc_id: categoryIncomeId,
    id,
  };
  const { setIncomesDb, setExpenses } = useContext(DataContext);
  const { newEditIncExp } = useNewEdit(null);
  const [newEdit, setNewEdit] = useState(initialValues);
  const [expenseType, setExpenseType] = useState([]);
  const [categoryExpenses, setCategoryExpenses] = useState([]);
  const [categoriesIncomes, setCategoriesIncome] = useState([]);

  useEffect(() => {
    controllerBudget.getCategoriesExpenses().then(({ data }) => {
      setCategoryExpenses(data.data);
    });
    controllerBudget.getExpenseTypes().then(({ data }) => {
      setExpenseType(data.data);
    });
    controllerBudget.getCategoriesIncome().then(({ data }) => {
      setCategoriesIncome(data.data);
    });
  }, []);

  function handlerChange(event) {
    setNewEdit({
      ...newEdit,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name, event.target.value);
  }
  function handlerSubmit(event) {
    event.preventDefault();
    const amountIncome = document.getElementById("amountIncome");
    const amountExpense = document.getElementById("amountExpense");
    const type_id = document.getElementById("type_id");
    const description = document.getElementById("description");
    const createdAt = document.getElementById("createdAt");
    const errorAmountIncome = document.getElementById("errorAmountIncome");
    const errorAmountExpense = document.getElementById("errorAmountExpense");
    const errorTypeExpense_id = document.getElementById("errorTypeExpense_id");
    const category_exp_id = document.getElementById("category_exp_id");
    const errorCategory_exp_id = document.getElementById(
      "errorCategory_exp_id"
    );
    const category_inc_id = document.getElementById("category_inc_id");
    const errorCategory_inc_id = document.getElementById(
      "errorCategory_inc_id"
    );
    const errorDescription = document.getElementById("errorDescription");
    const errorCreatedAt = document.getElementById("errorCreatedAt");
    const objValues = {
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
    };
    validationFormEditIncExp(
      objValues,
      newEdit,
      closeModal,
      setIncomesDb,
      setExpenses,
      newEditIncExp
    );
  }

  return (
    <div>
      <form onSubmit={handlerSubmit} className="formModal" id="formIncomes">
        {amountIncome ? (
          <div className="mb-3">
            <input
              name="amountIncome"
              type="number"
              onChange={handlerChange}
              className="form-control"
              id="amountIncome"
              placeholder="Ingreso"
              value={newEdit.amountIncome}
            />
            <p className="text-danger" id="errorAmountIncome"></p>
          </div>
        ) : (
          ""
        )}

        {amountExpense ? (
          <div className="mb-3">
            <label htmlFor="type_id" className="form-label">
              Monto del gasto
            </label>
            <input
              name="amountExpense"
              type="number"
              onChange={handlerChange}
              className="form-control"
              id="amountExpense"
              placeholder="Gasto"
              value={newEdit.amountExpense}
            />
            <p className="text-danger" id="errorAmountExpense"></p>
          </div>
        ) : (
          ""
        )}

        {expenseType && typeExpenseId ? (
          <>
            <div className="mb-3">
              <label htmlFor="type_id" className="form-label">
                Tipo de gasto
              </label>

              <select
                className="form-select"
                name="type_id"
                id="type_id"
                onChange={handlerChange}
              >
                <option value={0}>Tipos de gastos</option>
                {expenseType.map((type) => (
                  <option
                    key={type.id}
                    value={type.id}
                    selected={type.id == typeExpenseId ? "selected" : ""}
                  >
                    {type.type}
                  </option>
                ))}
              </select>
            </div>
            <p className="text-danger" id="errorTypeExpense_id"></p>
          </>
        ) : (
          ""
        )}

        {newEdit.categoryExpense && categoryExpenseId ? (
          <>
            <div className="mb-3">
              <label htmlFor="category_exp_id" className="form-label">
                Categoría de gasto
              </label>

              <select
                className="form-select"
                name="category_exp_id"
                id="category_exp_id"
                onChange={handlerChange}
              >
                <option value={0}>Categorías de gastos</option>
                {categoryExpenses.map((category) => (
                  <option
                    key={category.id}
                    value={category.id}
                    selected={
                      category.id == categoryExpenseId ? "selected" : ""
                    }
                  >
                    {category.category}
                  </option>
                ))}
              </select>
            </div>
            <p className="text-danger" id="errorCategory_exp_id"></p>
          </>
        ) : (
          ""
        )}
        {newEdit.categoryIncome && categoryIncomeId ? (
          <>
            <div className="mb-3">
              <label htmlFor="category_inc_id" className="form-label">
                Categoría de gasto
              </label>

              <select
                className="form-select"
                name="category_inc_id"
                id="category_inc_id"
                onChange={handlerChange}
              >
                <option value={0}>Categorías de gastos</option>
                {categoriesIncomes.map((category) => (
                  <option
                    key={category.id}
                    value={category.id}
                    selected={category.id == categoryIncomeId ? "selected" : ""}
                  >
                    {category.category}
                  </option>
                ))}
              </select>
            </div>
            <p className="text-danger" id="errorCategory_inc_id"></p>
          </>
        ) : (
          ""
        )}
        {description ? (
          <>
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
                value={newEdit.description}
              />
            </div>
            <p className="text-danger" id="errorDescription"></p>
          </>
        ) : (
          ""
        )}

        {createdAt ? (
          <>
            <div className="mb-3">
              <label htmlFor="createdAt" className="form-label">
                Fecha
              </label>
              <input
                name="createdAt"
                type="date"
                onChange={handlerChange}
                className="form-control"
                id="createdAt"
                placeholder="Descripción"
                value={transformDate(newEdit.createdAt).slice(0, 10)}
              />
            </div>
            <p className="text-danger" id="errorCreatedAt"></p>
          </>
        ) : (
          ""
        )}
        <button type="submit" id="btnRegister" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
}
