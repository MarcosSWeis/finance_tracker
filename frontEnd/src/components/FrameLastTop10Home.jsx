import React, { Fragment, useContext, useEffect, useState } from "react";
import $ from "jquery";
import RowFrameExpenses from "./RowFrameExpenses";
import Skeleton from "react-loading-skeleton";
import { controllerBudget } from "../services/request/budget";
import { DataContext } from "../context/DataContext";
import Modal from "./Modal";
import { useNewEdit } from "../hooks/useNewEdit";

export default function FrameLastTop10Home() {
  let countLoader = [];
  for (let i = 1; i <= 10; i++) {
    countLoader.push(i);
  }
  const { expenses, setShowFormExpense } = useContext(DataContext);
  const { editIncExp } = useNewEdit(null);

  const [top10Last, setTop10Last] = useState([]);
  const [width, setWidth] = useState(null);
  let windowsize;
  useEffect(() => {
    controllerBudget.getTop10IncomeExpense().then(({ data }) => {
      console.log(data);
      setTop10Last(data.data);
    });

    //responsive
    windowsize = $(window).width();
    setWidth(windowsize);
    // $(window).resize(function () {
    //   windowsize = $(window).width();
    //   setWidth(windowsize);
    // });
  }, [expenses]);

  return (
    <>
      <div className="mt-130px ">
        <h3 className="pb-3 text-center">Últimos movimientos</h3>
        <div className="mt-20">
          <table className="table  ">
            <thead className="thead-dark">
              <tr>
                <th scope="col" className="px-3 w-12">
                  Tipo
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
            {top10Last.length != 0
              ? top10Last.map((value) => (
                  <RowFrameExpenses
                    key={value.id}
                    id={value.id}
                    typeExpense={value["expenseType.type"]}
                    amountExpense={value.amountExpense}
                    amountIncome={value.amountIncome}
                    createdAt={value.createdAt}
                    description={value.description}
                    categoryExpense={value["categoryExpense.category"]}
                    categoryIncome={value["categoryIncome.category"]}
                    categoryExpenseId={value["categoryExpense.id"]}
                    typeExpenseId={value["expenseType.id"]}
                    categoryIncomeId={value["categoryIncome.id"]}

                    //  expenseType={expenseType}
                    //   categoryExpenses={categoryExpenses}
                  />
                ))
              : countLoader.map(() => loader())}
          </table>
        </div>
      </div>
    </>
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
