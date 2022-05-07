import $ from "jquery";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { controllerBudget } from "../services/request/budget";
import GraphicLineExpenses from "./GraphicLineExpenses";
import HorizontalBarGraphic from "./HorizontalBarGraphic";

export default function GraphicsExpenses() {
  const [tickGraphicBar, setTickGraphicBar] = useState(null);
  const [totalExpenses, setTotalExpenses] = useState([]);
  const [fixedExpenses, setFixedExpenses] = useState([]);
  const [flexibleExpenses, setFlexibleExpenses] = useState([]);
  const [savingExpenses, setSavingExpenses] = useState([]);
  console.log(totalExpenses, "totalExpenses");
  console.log(fixedExpenses, "fixedExpenses");
  console.log(flexibleExpenses, "flexibleExpenses");
  console.log(savingExpenses, "savingExpenses");
  //console.log("me renderizo dos veces");
  const [
    labels,
    arrPositionTotalExpenses,
    arrPositionFixedExpenses,
    arrPositionFlexibleExpenses,
    arrPositionSavingExpenses,
  ] = useMemo(() => {
    let values = [];
    let labels = [];
    let arrPositionTotalExpenses = [];
    let arrPositionFixedExpenses = [];
    let arrPositionFlexibleExpenses = [];
    let arrPositionSavingExpenses = [];
    for (let i = 1; i <= 31; i++) {
      labels.push(i);
    }
    for (let i = 0; i < labels.length; i++) {
      arrPositionTotalExpenses.push(null);
    }
    for (let i = 0; i < labels.length; i++) {
      arrPositionFixedExpenses.push(null);
    }
    for (let i = 0; i < labels.length; i++) {
      arrPositionFlexibleExpenses.push(null);
    }
    for (let i = 0; i < labels.length; i++) {
      arrPositionSavingExpenses.push(null);
    }
    values.push(
      labels,
      arrPositionTotalExpenses,
      arrPositionFixedExpenses,
      arrPositionFlexibleExpenses,
      arrPositionSavingExpenses
    );
    return values;
  }, []);

  //hago que el array de fechas coincida con la fecha de la expense
  if (totalExpenses.length !== 0) {
    for (let i = 0; i < totalExpenses.length; i++) {
      arrPositionTotalExpenses.splice(
        Number(totalExpenses[i].day) - 1,
        1,
        totalExpenses[i].totalForDay
      );
    }
  }

  if (fixedExpenses.length !== 0) {
    for (let i = 0; i < fixedExpenses.length; i++) {
      arrPositionFixedExpenses.splice(
        Number(fixedExpenses[i].day) - 1,
        1,
        fixedExpenses[i].totalForDay
      );
    }
  }
  if (flexibleExpenses.length !== 0) {
    for (let i = 0; i < flexibleExpenses.length; i++) {
      arrPositionFlexibleExpenses.splice(
        Number(flexibleExpenses[i].day) - 1,
        1,
        flexibleExpenses[i].totalForDay
      );
    }
  }

  if (savingExpenses.length !== 0) {
    for (let i = 0; i < savingExpenses.length; i++) {
      arrPositionSavingExpenses.splice(
        Number(savingExpenses[i].day) - 1,
        1,
        savingExpenses[i].totalForDay
      );
    }
  }

  useEffect(() => {
    // console.log("merenderiz la primera vez");
    const initialDate = "2022-04-01";
    const endDate = "2022-05-01";
    const fixedExpenses = 1;
    const flexibleExpenses = 2;
    const savingExpenses = 3;

    Promise.all([
      controllerBudget.getGraphicLineExpenses({ initialDate, endDate }),
      controllerBudget.getGraphicLineExpenses({
        initialDate,
        endDate,
        fixedExpenses,
      }),
      controllerBudget.getGraphicLineExpenses({
        initialDate,
        endDate,
        flexibleExpenses,
      }),
      controllerBudget.getGraphicLineExpenses({
        initialDate,
        endDate,
        savingExpenses,
      }),
    ]).then(
      ([
        { data: dataTotalExpenses },
        { data: dataFixedExpense },
        { data: dataFlexibleExpenses },
        { data: dataSavingExpenses },
      ]) => {
        // console.log(dataTotalExpenses);
        // console.log(dataFixedExpense);
        // console.log(dataFlexibleExpenses);
        // console.log(dataSavingExpenses);

        setTotalExpenses(dataTotalExpenses.data);
        setFixedExpenses(dataFixedExpense.data);
        setFlexibleExpenses(dataFlexibleExpenses.data);
        setSavingExpenses(dataSavingExpenses.data);
      }
    );
  }, []);

  function handlerGraphicBar() {
    !tickGraphicBar ? setTickGraphicBar(true) : setTickGraphicBar(null);
  }
  //   console.log(arrPositionTotalExpenses, "arrPositionTotalExpenses");
  //   console.log(arrPositionFixedExpenses, "arrPositionFixedExpenses");
  //   console.log(arrPositionFlexibleExpenses, "arrPositionFlexibleExpenses");
  //   console.log(arrPositionSavingExpenses, "arrPositionSavingExpenses");
  return (
    <div className="w-100 mx-auto  mt-130px">
      <div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onClick={handlerGraphicBar}
          />
          <label className="form-check-label" for="flexCheckDefault">
            Gráfico de Barras
          </label>
        </div>
        <div className="form-check pt-2">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
          <label className="form-check-label" for="flexCheckChecked">
            Gráfico de torta
          </label>
        </div>
      </div>
      {!tickGraphicBar &&
        (totalExpenses.length === 0 &&
        fixedExpenses.length === 0 &&
        flexibleExpenses.length === 0 &&
        savingExpenses.length === 0 ? (
          loader()
        ) : (
          <GraphicLineExpenses
            arrPositionTotalExpenses={arrPositionTotalExpenses}
            arrPositionFixedExpenses={arrPositionFixedExpenses}
            arrPositionFlexibleExpenses={arrPositionFlexibleExpenses}
            arrPositionSavingExpenses={arrPositionSavingExpenses}
            labels={labels}
          />
        ))}
      {tickGraphicBar &&
        (totalExpenses.length === 0 &&
        fixedExpenses.length === 0 &&
        flexibleExpenses.length === 0 &&
        savingExpenses.length === 0 ? (
          loader()
        ) : (
          <>
            <HorizontalBarGraphic
              arrPositionTotalExpenses={arrPositionTotalExpenses}
              arrPositionFixedExpenses={arrPositionFixedExpenses}
              arrPositionFlexibleExpenses={arrPositionFlexibleExpenses}
              arrPositionSavingExpenses={arrPositionSavingExpenses}
              labels={labels}
            />
          </>
        ))}
    </div>
  );
}

function loader() {
  return <Skeleton className="height-500px  w-100  mt-5" duration={0.8} />;
}
