import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [errorToken, setErrorToken] = useState(null);
  const [verifyToken, setVerifyToken] = useState(null);
  const [errorFirstLogged, setErrorFirstLogged] = useState(null);
  const [showForm, setShowForm] = useState(null);
  const [incomesDb, setIncomesDb] = useState(null);
  const [user, setUser] = useState(null);
  const [showFormExpense, setShowFormExpense] = useState(null);
  const [expenses, setExpenses] = useState(null);
  const [queryParameterDate, setQueryParameterDate] = useState(null);

  return (
    <DataContext.Provider
      value={{
        errorToken,
        setErrorToken,
        verifyToken,
        setVerifyToken,
        errorFirstLogged,
        setErrorFirstLogged,
        showForm,
        setShowForm,
        incomesDb,
        setIncomesDb,
        setUser,
        user,
        showFormExpense,
        setShowFormExpense,
        expenses,
        setExpenses,
        queryParameterDate,
        setQueryParameterDate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
