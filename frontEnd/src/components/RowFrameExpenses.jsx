import swal from "@sweetalert/with-react";
import { useEffect, useMemo, useState } from "react";
import Skeleton from "react-loading-skeleton";
import transformDate from "../helpers/transformDate";
import { controllerBudget } from "../services/request/budget";
import $ from "jquery";
import { UpdateModeEnum } from "chart.js";
import alertFormEditToRow from "../helpers/AlertFormEditToRow.js";
import AlertFormEditToRow from "../helpers/AlertFormEditToRow.js";

export default function RowFrameExpenses({
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
}) {
  const initialValues = {
    amountExpense,
    amountIncome,
    createdAt,
    description,
    typeExpense,
    categoryExpense,
    categoryIncome,
    id,
  };
  const [newEdit, setNewEdit] = useState(initialValues);
  const [width, setWidth] = useState(null);
  const [expenseType, setExpenseType] = useState([]);
  const [categoryExpenses, setCategoryExpenses] = useState([]);
  let windowSize;
  useEffect(() => {
    windowSize = $(window).width();
    setWidth(windowSize);
    controllerBudget.getCategoriesExpenses().then(({ data }) => {
      setCategoryExpenses(data.data);
    });
    controllerBudget.getExpenseTypes().then(({ data }) => {
      setExpenseType(data.data);
    });
  }, []);
  console.log(width, "width");
  const x = id;
  console.log(x, "id");
  function handlerSubmit(event) {
    event.preventDefault();
  }
  function handlerChange(event) {
    setNewEdit({
      ...newEdit,
      [event.target.name]: event.target.value,
    });
  }
  function handlerEdit() {
    swal(
      <div>
        <form onSubmit={handlerSubmit} id="formIncomes">
          {newEdit.amountIncome ? (
            <div className="mb-3">
              <input
                name="amountIncome"
                type="number"
                onChange={handlerChange}
                className="form-control"
                id="amountIncome"
                placeholder="Ingreso Fijo"
                value={newEdit.amountIncome}
              />
              <p className="text-danger" id="errorAmountIncome"></p>
            </div>
          ) : (
            ""
          )}

          {newEdit.amountExpense ? (
            <div className="mb-3">
              <input
                name="amountExpense"
                type="number"
                onChange={handlerChange}
                className="form-control"
                id="amountExpense"
                placeholder="Ingreso Fijo"
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
                <label htmlFor="category_exp_id" className="form-label">
                  Tipo de gasto
                </label>

                <select
                  className="form-select"
                  name="category_exp_id"
                  id="category_exp_id"
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
              <p className="text-danger" id="errorCategory_exp_id"></p>
            </>
          ) : (
            ""
          )}

          {newEdit.categoryExpense && categoryExpenseId ? (
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
          ) : (
            ""
          )}

          {newEdit.description ? (
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
          ) : (
            ""
          )}

          {newEdit.createdAt ? (
            <div className="mb-3">
              <label htmlFor="createdAt" className="form-label">
                Descripción
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

  return (
    <>
      <tbody>
        <tr>
          {typeExpense ? (
            <td className="align-middle p-3">{typeExpense}</td>
          ) : (
            <td className="align-middle p-3">Ingreso</td>
          )}
          {!(width < 720) ? (
            <td className="align-middle p-0" id="RowDescription">
              {description}
            </td>
          ) : (
            ""
          )}
          {amountExpense ? (
            <td className="align-middle p-0 text-danger ">
              <strong>$ {amountExpense}</strong>
            </td>
          ) : (
            <td className="align-middle p-0 text-success ">
              <strong>$ {amountIncome}</strong>
            </td>
          )}
          {!(width < 720) ? (
            categoryExpense ? (
              <td className="align-middle p-0 ">{categoryExpense}</td>
            ) : (
              <td className="align-middle p-0">{categoryIncome}</td>
            )
          ) : (
            ""
          )}
          <td className="align-middle p-0">{transformDate(createdAt)}</td>
          <td className="p-1  w-12px">
            <button
              type="button"
              className="btnEditRowExpense w-100 p-0 mb-1"
              onClick={handlerEdit}
            >
              Editar
            </button>
            <button type="button" className="btnDeleteRowExpense w-100 p-0">
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
}
