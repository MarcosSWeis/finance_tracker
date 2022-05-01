import { Fragment, useEffect, useState } from "react";
import $ from "jquery";
import RowFrameExpenses from "./RowFrameExpenses";
import Skeleton from "react-loading-skeleton";
import { controllerBudget } from "../services/request/budget";

export default function ListExpensesHome() {
  let countLoader = [];
  for (let i = 1; i <= 10; i++) {
    countLoader.push(i);
  }
  const [top10LastExpenses, setTop10LastExpenses] = useState([]);
  const [width, setWidth] = useState(null);
  let windowsize;
  useEffect(() => {
    controllerBudget
      .getExpenses(undefined, {
        initialDate: "undefined",
        endDate: "undefined",
      })
      .then(({ data }) => {
        console.log(data);
        setTop10LastExpenses(data.data);
      });

    //responsive
    windowsize = $(window).width();
    setWidth(windowsize);
    $(window).resize(function () {
      windowsize = $(window).width();
      setWidth(windowsize);
    });
  }, []);

  return (
    <div className="mt-130px ">
      <h3 className="pb-3 text-center">Últimos diez gastos</h3>
      <div className="mt-20">
        <table className="table  ">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="px-3 w-12">
                Tipo de gasto
              </th>

              {!(width < 720) ? (
                <th scope="col" className="px-0 w-12">
                  Descripción
                </th>
              ) : (
                ""
              )}
              <th scope="col" className="px-0 w-12">
                Monto
              </th>
              {!(width < 720) ? (
                <th scope="col" className="px-0 w-12">
                  Categoría
                </th>
              ) : (
                ""
              )}
              <th scope="col" className="px-0 w-12">
                Fecha de creación
              </th>
              <th scope="col" className="px-0 w-5 text-center">
                Opciones
              </th>
            </tr>
          </thead>
          {top10LastExpenses.length != 0
            ? top10LastExpenses.map((expense) => (
                <RowFrameExpenses
                  key={expense.id}
                  type={expense["expenseType.type"]}
                  amount={expense.amount}
                  createdAt={expense.createdAt}
                  description={expense.description}
                  category={expense["categoryExpense.category"]}
                  //  expenseType={expenseType}
                  //   categoryExpenses={categoryExpenses}
                />
              ))
            : countLoader.map(() => loader())}
        </table>
      </div>
    </div>
  );
}

function loader() {
  return (
    <Fragment>
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
    </Fragment>
  );
}
