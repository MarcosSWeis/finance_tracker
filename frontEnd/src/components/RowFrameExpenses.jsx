import { useEffect, useMemo, useState } from "react";
import Skeleton from "react-loading-skeleton";
import transformDate from "../helpers/transformDate";
import { controllerBudget } from "../services/request/budget";
import $ from "jquery";
import { UpdateModeEnum } from "chart.js";

export default function RowFrameExpenses({
  amount,
  createdAt,
  description,
  type,
  category,
}) {
  const [width, setWidth] = useState(null);

  //   window.addEventListener("resize", function () {
  //     console.log(window.innerWidth);
  //   });
  let windowsize;
  useEffect(() => {
    console.log("me renderizo la primera vex");
    windowsize = $(window).width();
    setWidth(windowsize);
    $(window).resize(function () {
      windowsize = $(window).width();
      setWidth(windowsize);
    });
  }, []);
  console.log(width, "width");
  return (
    <tbody>
      <tr>
        <td className="align-middle p-3">{type}</td>
        {!(width < 720) ? (
          <td className="align-middle p-0" id="RowDescription">
            {description}
          </td>
        ) : (
          ""
        )}

        <td className="align-middle p-0 colorPrice ">
          <strong>$ {amount}</strong>
        </td>
        {!(width < 720) ? <td className="align-middle p-0">{category}</td> : ""}
        <td className="align-middle p-0">{transformDate(createdAt)}</td>
        <td className="p-1  w-12px">
          <button type="button" className="btnEditRowExpense w-100 p-0 mb-1">
            Editar
          </button>
          <button type="button" class="btnDeleteRowExpense w-100 p-0">
            Eliminar
          </button>
        </td>
      </tr>
    </tbody>
  );
}
