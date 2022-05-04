import { useState, useContext } from "react";
import { DataContext } from "../context/DataContext";

export const useModal = (initialValue = false) => {
  const { setExpenses, incomesDb, expenses, setIncomesDb } =
    useContext(DataContext);
  const [isOpen, setIsOpen] = useState(initialValue);
  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    if (expenses) {
      setExpenses(null);
    } else {
      setExpenses(true);
    }
    if (incomesDb) {
      setIncomesDb(null);
    } else {
      setIncomesDb(true);
    }
  };
  return { isOpen, openModal, closeModal };
};
