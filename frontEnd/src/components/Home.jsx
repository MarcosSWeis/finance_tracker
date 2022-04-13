import { useContext, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { DataContext } from "../context/DataContext";
import CardsMetricsHome from "./CardsMetricsHome";
import FormIncomes from "./FromIncomes";
import HandlerButtonExpenses from "./HandlerButonExpenses";

import HandlerButtonsIncomes from "./HandlerButtonsIncomes";

export default function Home() {
  const { showForm } = useContext(DataContext);

  console.log(showForm, "showForm");
  return (
    <div className="w-100 mx-2 ">
      <h2 className="text-center">Renderizando el Home</h2>
      <div className="d-flex justify-content-center widthMetrics">
        <CardsMetricsHome />
      </div>

      <HandlerButtonsIncomes />
      {showForm && <FormIncomes />}
      <HandlerButtonExpenses />
    </div>
  );
}
