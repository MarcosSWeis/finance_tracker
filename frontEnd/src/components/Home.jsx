import React, { Fragment, useContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Route, Routes, Outlet } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { ExpensesContext } from "../context/ExpensesContext";
import { controllerBudget } from "../services/request/budget";
import CardsMetricsHome from "./CardsMetricsHome";
import FormExpenses from "./FormExpenses";
import FrameExpenses from "./FrameExpenses";
import FormIncomes from "./FromIncomes";
import HandlerButtonExpenses from "./HandlerButonExpenses";

import HandlerButtonsIncomes from "./HandlerButtonsIncomes";
import FrameLastTop10Home from "./FrameLastTop10Home";
import RowFrameExpenses from "./RowFrameExpenses";
import FormVarIncomes from "./FormVarIncomes";

export default function Home() {
  const { showForm, incomesDb, setIncomesDb, showFormExpense, showVarIncome } =
    useContext(DataContext);
  const [dataIncome, setDataIncome] = useState({});

  useEffect(() => {
    controllerBudget.getIncomesDb().then(({ data }) => {
      if (data.meta.length > 0) {
        setIncomesDb(data.meta.ok);
        setDataIncome(data.data[0]);
      } else {
        setIncomesDb(null);
      }
    });
  }, []);

  return (
    <div className="w-100 mx-2  mt-130px  ">
      {incomesDb ? (
        <div className="d-flex justify-content-center widthMetrics">
          <CardsMetricsHome
            fixedIncome={dataIncome.fixed_income}
            category={dataIncome.category_inc_id}
            incomesDb={incomesDb}
          />
        </div>
      ) : (
        ""
      )}
      <HandlerButtonsIncomes />
      {showForm && <FormIncomes setDataIncome={setDataIncome} />}
      {showFormExpense && <FormExpenses />}
      {showVarIncome && <FormVarIncomes />}
      <FrameLastTop10Home />
    </div>
  );
}
