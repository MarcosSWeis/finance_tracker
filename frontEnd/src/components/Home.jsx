import { useContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Route, Routes, Outlet } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { getIncomesDb } from "../helpers/getIncomesDb";
import CardsMetricsHome from "./CardsMetricsHome";
import FormIncomes from "./FromIncomes";
import HandlerButtonExpenses from "./HandlerButonExpenses";

import HandlerButtonsIncomes from "./HandlerButtonsIncomes";

export default function Home() {
  const { showForm, incomesDb, setIncomesDb } = useContext(DataContext);
  const [dataIncome, setDataIncome] = useState({});

  useEffect(() => {
    getIncomesDb().then(({ data }) => {
      if (data.meta.length > 0) {
        setIncomesDb(data.meta.ok);
        setDataIncome(data.data[0]);
      } else {
        setIncomesDb(null);
      }
    });
  }, []);

  return (
    <div className="w-100 mx-2 ">
      <h2 className="text-center">Renderizando el Home</h2>
      {incomesDb ? (
        <div className="d-flex justify-content-center widthMetrics">
          <CardsMetricsHome fixedIncome={dataIncome.fixed_income} />
        </div>
      ) : (
        <Skeleton />
      )}
      <HandlerButtonsIncomes />

      {showForm && <FormIncomes setDataIncome={setDataIncome} />}
      <HandlerButtonExpenses />
    </div>
  );
}
