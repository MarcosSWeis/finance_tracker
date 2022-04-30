import { useEffect, useState } from "react";
import $ from "jquery";

export default function ListExpensesHome() {
  const [width, setWidth] = useState(null);
  let windowsize;
  useEffect(() => {
    windowsize = $(window).width();
    setWidth(windowsize);
    $(window).resize(function () {
      windowsize = $(window).width();
      setWidth(windowsize);
    });
  });

  return (
    <div className="mt-130px ">
      <h3 className="pb-3 text-center">Gastos de este Mes</h3>
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
        </table>
      </div>
    </div>
  );
}
