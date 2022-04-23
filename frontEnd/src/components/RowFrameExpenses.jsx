import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import transformDate from "../helpers/transformDate";
import { controllerBudget } from "../services/request/budget";

export default function RowFrameExpenses({
  type_id,
  amount,
  createdAt,
  description,
  category_exp_id,
}) {
  const [expenseType, setExpenseType] = useState([]);
  const [categoryExpenses, setCategoryExpenses] = useState([]);

  useEffect(() => {
    controllerBudget.getCategoriesExpenses().then(({ data }) => {
      console.log(data.data, "categoryExpenses");
      setCategoryExpenses(data.data);
    });
    controllerBudget.getExpenseTypes().then(({ data }) => {
      setExpenseType(data.data);
    });
  }, []);

  return (
    <tbody>
      {expenseType && categoryExpenses ? (
        <tr>
          <td className="align-middle p-3">
            {expenseType.map((type) => (type.id == type_id ? type.type : ""))}
          </td>
          <td className="align-middle p-0">{description}</td>
          <td className="align-middle p-0 colorPrice ">
            <strong>$ {amount}</strong>
          </td>
          <td className="align-middle p-0">
            {categoryExpenses.map((category) =>
              category.id == category_exp_id ? category.category : ""
            )}
          </td>
          <td className="align-middle p-0">{transformDate(createdAt)}</td>
          <td className="p-1  w-12px">
            <button type="button" className="btnEditRowExpense w-100 p-0 mb-1">
              Editar
            </button>
            <button type="button" class="btnDeleteRowExpense w-100 p-0">
              Eliminar
            </button>
          </td>
        </tr>
      ) : (
        loader()
      )}
    </tbody>
  );
}
function loader() {
  return (
    <tr>
      <td className="align-middle p-3">
        <Skeleton duration={0.8} />
      </td>
      <td className="align-middle p-2">
        <Skeleton duration={0.8} />
      </td>
      <td className="align-middle p-2">
        <Skeleton duration={0.8} />
      </td>
      <td className="align-middle p-2">
        <Skeleton duration={0.8} />
      </td>
      <td className="align-middle p-2">
        <Skeleton duration={0.8} />
      </td>
      <td className="p-1  w-12px">
        <Skeleton width={100} duration={0.8} />

        <Skeleton width={100} duration={0.8} />
      </td>
    </tr>
  );
}
