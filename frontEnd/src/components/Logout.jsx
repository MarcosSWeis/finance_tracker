import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";

export default function LogOut() {
  const {
    setVerifyToken,
    setShowForm,
    setErrorToken,
    setErrorFirstLogged,
    setIncomesDb,
    setUser,
    setShowFormExpense,
  } = useContext(DataContext);
  const navigate = useNavigate();
  function handlerClick(event) {
    event.preventDefault();
    window.localStorage.removeItem("user");
    //1° forma hay que reinicar las variables de CONTEXTO a null porque al cambiar de usuario podria mostrar cosas que no podria ver ya
    //que quedaron seteadas con los valores del user anteriror
    //las que son declaradas con usesState() ,no es necesario ponerlas null , ya que el componente se desmonta
    setVerifyToken(null);
    setShowForm(null);
    setErrorToken(null);
    setErrorFirstLogged(null);
    setIncomesDb(null);
    setUser(null);
    setShowFormExpense(null);
    //2° forma y saco setVerifyToken
    //HAGO LA DOS ASI TODAS LAS VARIABLES SE REINICIAN
    window.location.reload(true);
  }
  return (
    <li className="nav-item px-2 cta">
      <NavLink to={"/log"} className="nav-link " onClick={handlerClick}>
        <span className="hover-underline-animation">Logout</span>
      </NavLink>
    </li>
  );
}
