import React from "react";
import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { getAuthToken } from "../helpers/getAuthToken";

const PrivateRoute = ({ children }) => {
  const { setErrorToken } = useContext(DataContext);
  const { setVerifyToken } = useContext(DataContext);
  const { verifyToken } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    getAuthToken(setErrorToken, navigate, setVerifyToken, verifyToken);
  }, []);

  return verifyToken ? children : <Navigate to={"/"} />;
};

export default PrivateRoute;
