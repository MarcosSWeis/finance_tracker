import { createContext, useState } from "react";

export const ExpensesContext = createContext();

export const ExpensesProvider = ({ children }) => {
  const [expense, setExpense] = useState(null);
  return (
    <ExpensesContext.Provider value={{ expense, setExpense }}>
      {children}
    </ExpensesContext.Provider>
  );
};
