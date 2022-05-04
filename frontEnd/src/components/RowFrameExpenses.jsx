import { useEffect, useMemo, useState } from "react";
import transformDate from "../helpers/transformDate";
import $ from "jquery";
import Modal from "./Modal";
import AlertEditModal from "./AlertEditModal";
import { useModal } from "../hooks/useModal";

export default function RowFrameExpenses({
  amountExpense,
  amountIncome,
  createdAt,
  description,
  typeExpense,
  categoryExpense,
  categoryIncome,
  id,
  categoryExpenseId,
  categoryIncomeId,
  typeExpenseId,
}) {
  const { isOpen, openModal, closeModal } = useModal(false);
  //   const [newEdit, setNewEdit] = useState(initialValues);

  const [width, setWidth] = useState(null);
  // const [expenseType, setExpenseType] = useState([]);
  //   const [categoryExpenses, setCategoryExpenses] = useState([]);
  //  const [categoriesIncomes, setCategoriesIncome] = useState([]);

  let windowSize;
  useEffect(() => {
    windowSize = $(window).width();
    setWidth(windowSize);
  }, []);

  return (
    <>
      <tbody>
        <tr>
          {typeExpense ? (
            <td className="align-middle p-3">{typeExpense}</td>
          ) : (
            <td className="align-middle p-3">Ingreso</td>
          )}
          {!(width < 720) ? (
            <td className="align-middle p-0" id="RowDescription">
              {description}
            </td>
          ) : (
            ""
          )}
          {amountExpense ? (
            <td className="align-middle p-0 text-danger ">
              <strong>$ {amountExpense}</strong>
            </td>
          ) : (
            <td className="align-middle p-0 text-success ">
              <strong>$ {amountIncome}</strong>
            </td>
          )}
          {!(width < 720) ? (
            categoryExpense ? (
              <td className="align-middle p-0 ">{categoryExpense}</td>
            ) : (
              <td className="align-middle p-0">{categoryIncome}</td>
            )
          ) : (
            ""
          )}
          <td className="align-middle p-0">{transformDate(createdAt)}</td>
          <td className="p-1  w-12px">
            <button
              type="button"
              className="btnEditRowExpense w-100 p-0 mb-1"
              onClick={() => {
                if (isOpen) {
                  openModal(false);
                } else {
                  openModal(true);
                }
              }}
            >
              Editar
            </button>
            <button type="button" className="btnDeleteRowExpense w-100 p-0">
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <AlertEditModal
          key={id}
          amountExpense={amountExpense}
          amountIncome={amountIncome}
          createdAt={createdAt}
          description={description}
          typeExpense={typeExpense}
          categoryExpense={categoryExpense}
          categoryIncome={categoryIncome}
          id={id}
          categoryExpenseId={categoryExpenseId}
          categoryIncomeId={categoryIncomeId}
          typeExpenseId={typeExpenseId}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
}
