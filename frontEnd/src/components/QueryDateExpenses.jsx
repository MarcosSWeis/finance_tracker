import $ from "jquery";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { validationFormQueryExpenseDate } from "../helpers/validation-form-query-expense-date";
let years = [];
for (let i = 2022; i <= 2040; i++) {
  years.push(i);
}
let months = [];
for (let i = 1; i <= 12; i++) {
  months.push(i);
}
let days = [];
for (let i = 1; i <= 31; i++) {
  days.push(i);
}
const initialDataForm = {
  initialYear: "",
  initialMonths: "",
  initialDays: "",
  endYear: "",
  endMonths: "",
  endDays: "",
};
export default function InputSetDate() {
  const { queryParameterDate, setQueryParameterDate } = useContext(DataContext);
  const [optionsQueryDate, setOptionsQueryDate] = useState(initialDataForm);
  function handlerChanges(event) {
    setOptionsQueryDate({
      ...optionsQueryDate,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name, event.target.value);
  }

  function handlerSubmit(event) {
    event.preventDefault();
    const initialYear = $("#initialYear");
    const initialMonths = $("#initialMonths");
    const initialDays = $("#initialDays");
    const endYear = $("#endYear");
    const endMonths = $("#endMonths");
    const endDays = $("#endDays");
    const errorInitialYear = $("#errorInitialYear");
    const errorInitialMonths = $("#errorInitialMonths");
    const errorInitialDays = $("#errorInitialDays");
    const errorEndYear = $("#errorEndYear");
    const errorEndMonths = $("#errorEndMonths");
    const errorEndDays = $("#errorEndDays");
    const ulErrors = $("#ulErrors");

    const values = {
      initialYear,
      initialMonths,
      initialDays,
      endYear,
      endMonths,
      endDays,
      errorInitialYear,
      errorInitialMonths,
      errorInitialDays,
      errorEndYear,
      errorEndMonths,
      errorEndDays,
      ulErrors,
    };

    validationFormQueryExpenseDate(
      values,
      optionsQueryDate,
      setQueryParameterDate
    );
  }
  return (
    /// en el css sacar el display flex asi queda en un fila
    <div className=" pb-3 mt-5 ">
      <form action="" id="formSetDate" className="" onSubmit={handlerSubmit}>
        <div className="ml-0  ">
          <ul id="ulErrors" className="none p-4">
            <li id="errorInitialYear" className="text-danger"></li>
            <li id="errorInitialMonths" className="text-danger"></li>
            <li id="errorInitialDays" className="text-danger"></li>
            <li id="errorEndYear" className="text-danger"></li>
            <li id="errorEndMonths" className="text-danger"></li>
            <li id="errorEndDays" className="text-danger"></li>
          </ul>
        </div>
        <label className="text-start ml-2">Fecha inicial</label>
        <div className="d-flex  w-100 justify-content-start">
          <label htmlFor="initialYear" className="d-none">
            Año
          </label>

          <select
            class="form-select  w-auto  mx-2 "
            aria-label="Default select example"
            name="initialYear"
            id="initialYear"
            onChange={handlerChanges}
          >
            <option value={0}>Año</option>
            {years.map((year) => (
              <option value={`${year}`}>{year}</option>
            ))}
          </select>

          <label htmlFor="initialMonths" className="d-none">
            Mes
          </label>
          <select
            name="initialMonths"
            id="initialMonths"
            class="form-select  w-auto mx-2"
            aria-label="Default select example"
            onChange={handlerChanges}
          >
            <option value={0}>Mes</option>
            {months.map((month) => (
              <option value={`${month}`}>{month}</option>
            ))}
          </select>

          <label htmlFor="initialDays" className="d-none">
            Dia
          </label>
          <select
            name="initialDays"
            id="initialDays"
            class="form-select  w-auto mx-2"
            aria-label="Default select example"
            onChange={handlerChanges}
          >
            <option value={0}>Dia</option>
            {days.map((day) => (
              <option value={`${day}`}>{day}</option>
            ))}
          </select>
        </div>
        <label className="text-start ml-2 mt-2">Fecha final</label>
        <div className="d-flex ml-auto  justify-content-start ">
          <label htmlFor="endYear" className="d-none">
            Año
          </label>
          <select
            class="form-select  w-auto mx-2  "
            aria-label="Default select example"
            name="endYear"
            id="endYear"
            onChange={handlerChanges}
          >
            <option value={0}>Año</option>
            {years.map((year) => (
              <option value={`${year}`}>{year}</option>
            ))}
          </select>

          <label htmlFor="endMonths" className="d-none">
            Mes
          </label>
          <select
            name="endMonths"
            id="endMonths"
            class="form-select w-auto mx-2"
            aria-label="Default select example"
            onChange={handlerChanges}
          >
            <option value={0}>Mes</option>
            {months.map((month) => (
              <option value={`${month}`}>{month}</option>
            ))}
          </select>

          <label htmlFor="endDays" className="d-none">
            Dia
          </label>
          <select
            name="endDays"
            id="endDays"
            class="form-select w-auto mx-2"
            aria-label="Default select example"
            onChange={handlerChanges}
          >
            <option value={0}>Dia</option>
            {days.map((day) => (
              <option value={`${day}`}>{day}</option>
            ))}
          </select>
        </div>
        <div className="d-flex ">
          <button type="submit" class="btn btn-primary mt-2 ml-2 ">
            Enviar
          </button>
          <div className="mt-2 m-10">
            <button
              type="button"
              class="btn btn-primary "
              onClick={() => {
                setQueryParameterDate({
                  initialDate: undefined,
                  endDate: undefined,
                });
              }}
            >
              Gastos del mes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
