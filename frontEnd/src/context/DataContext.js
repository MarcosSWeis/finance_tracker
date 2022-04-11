import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [errorToken, setErrorToken] = useState(null);
  const [verifyToken, setVerifyToken] = useState(null);
  const [errorFirstLogged, setErrorFirstLogged] = useState(null);

  return (
    <DataContext.Provider
      value={{
        errorToken,
        setErrorToken,
        verifyToken,
        setVerifyToken,
        errorFirstLogged,
        setErrorFirstLogged,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
