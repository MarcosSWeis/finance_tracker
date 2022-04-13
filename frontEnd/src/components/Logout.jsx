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
    <li className="nav-item px-2 cta">
      <NavLink to={"/log"} className="nav-link " onClick={handlerClick}>
        <span className="hover-underline-animation">Logout</span>
      </NavLink>
    </li>
  );
}
