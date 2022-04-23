import $ from "jquery";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
let years = [];
for (let i = 2022; i <= 2040; i++) {
  years.push(i);
}
let months = [];
for (let i = 1; i <= 12; i++) {
  months.push(i);
}
let days = [];
for (let i = 1; i <= 30; i++) {
  days.push(i);
}

export default function InputSetDate() {
  const { setQueryParameterDate } = useContext(DataContext);
  function handlerSubmit(event) {
    event.preventDefault();
  }
  return (
    /// en el css sacar el display flex asi queda en un fila
    <div className=" pb-3 mt-5">
      <form action="" id="formSetDate" className="" onSubmit={handlerSubmit}>
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
          >
            <option value={0}>Dia</option>
            {days.map((day) => (
              <option value={`${day}`}>{day}</option>
            ))}
          </select>
        </div>
        <button type="submit" class="btn btn-primary mt-2 ml-2 ">
          Enviar
        </button>
      </form>
    </div>
  );
}
