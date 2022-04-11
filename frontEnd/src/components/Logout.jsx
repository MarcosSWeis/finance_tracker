import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";

export default function LogOut() {
  const { setVerifyToken } = useContext(DataContext);
  const navigate = useNavigate();
  function handlerClick(event) {
    event.preventDefault();
    window.localStorage.removeItem("accessToken");
    setVerifyToken(null);
  }
  return (
    <li className="nav-item px-2">
      <NavLink to={"/log"} className="nav-link " onClick={handlerClick}>
        Logout
      </NavLink>
    </li>
  );
}
