import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getAuthToken } from "../helpers/getAuthToken";

const PrivateRoute = ({
  children,
  setErrorToken,
  setVerifyToken,
  verifyToken,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    getAuthToken(setErrorToken, navigate, setVerifyToken, verifyToken);
  }, []);
  return verifyToken ? children : <Navigate to={"/"} />;
};

export default PrivateRoute;
