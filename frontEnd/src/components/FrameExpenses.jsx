import { Fragment, useContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import $ from "jquery";
import { DataContext } from "../context/DataContext";
import { controllerBudget } from "../services/request/budget";
import BtnSwitch from "./SwitchDates";
import ButtonsPages from "./ButtonsPages";
import InputSetDate from "./QueryDateExpenses";
import RowFrameExpenses from "./RowFrameExpenses";

export default function FrameExpenses() {
  const { queryParameterDate, setQueryParameterDate } = useContext(DataContext);
  const [dataExpenses, setDataExpenses] = useState([]);
  //totalRowsBd me dice en la db cuantosdatos tiene para que yo cuando pagin , no me pase y se rompra todo
  const [totalRowsBd, setTotalRowsBd] = useState(null);
  const [page, setPage] = useState(1);
  const [switchDates, setSwitchDates] = useState(null);
  const [expenseType, setExpenseType] = useState([]);
  const [categoryExpenses, setCategoryExpenses] = useState([]);
  const [width, setWidth] = useState(null);

  let countLoader = [];
  let windowsize;
  for (let i = 1; i <= 10; i++) {
    countLoader.push(i);
  }
  useEffect(() => {
    console.log("me renderizo una vex");
    controllerBudget.getCategoriesExpenses().then(({ data }) => {
      setCategoryExpenses(data.data);
    });
    controllerBudget.getExpenseTypes().then(({ data }) => {
      setExpenseType(data.data);
    });
    controllerBudget.getExpenses(page, queryParameterDate).then(({ data }) => {
      setDataExpenses(data.data);
      setTotalRowsBd(data.meta.total);
    });
    windowsize = $(window).width();
    setWidth(windowsize);
    $(window).resize(function () {
      windowsize = $(window).width();
      setWidth(windowsize);
    });
  }, [page, queryParameterDate]);

  return (
    <div className="mt-130px ">
      <h3 className="pb-3 text-center">Gastos de este Mes</h3>
      <div className="d-flex">
        <div className="w-50">
          <BtnSwitch
            setSwitchDates={setSwitchDates}
            switchDates={switchDates}
          />
          {switchDates && <InputSetDate />}
        </div>
      </div>
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

          {dataExpenses.length != 0
            ? dataExpenses.map((expense) => (
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
      <ButtonsPages setPage={setPage} page={page} totalRowsBd={totalRowsBd} />
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
