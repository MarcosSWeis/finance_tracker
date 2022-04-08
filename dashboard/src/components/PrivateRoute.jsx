import { Navigate } from "react-router-dom";
function handlerLogged() {
  const islogged = window.localStorage.getItem("accessToken");
  return islogged;
}

const PrivateRoute = ({ children }) => {
  const islogged = handlerLogged();
  return islogged ? children : <Navigate to={"/"} />;
};

export default PrivateRoute;
