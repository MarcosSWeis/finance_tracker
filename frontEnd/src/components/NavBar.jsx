import { useContext, useEffect, useState } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { DataContext } from "../context/DataContext";
import { getUserLocalStorage } from "../helpers/get-user-localStorage";
import LogOut from "./Logout";

export default function NavBar() {
  //user contiene la data para el navbar, y el token po si se necesita
  const { verifyToken, user, setUser } = useContext(DataContext);
  console.log(verifyToken, " verifyToken navbar");
  console.log(user, "usernavbar");
  useEffect(() => {
    const dataUser = getUserLocalStorage();
    setUser(dataUser);
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top p-2">
      <div className="container mw-100">
        <NavLink to={"/home"} className="navbar-brand w-346 ">
          Start Bootstrap
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarResponsive"
        >
          {verifyToken && user ? (
            <div className="navbar-nav ms-auto text-center m-auto  ">
              <NavLink to={"/profile"} className="nav-link  cta">
                <img
                  src={`http://localhost:3001/img/users/${user.avatar}`}
                  alt="image_user"
                  className="img-fluid img-thumbnail rounded-circle border-0 w-50px m-auto d-block"
                />

                <span className="hover-underline-animation p-0">
                  {user.username}
                </span>
              </NavLink>
            </div>
          ) : (
            <Skeleton />
          )}
          <ul className="navbar-nav ">
            <li className="nav-item active px-1">
              <NavLink to={"/home"} className="nav-link  cta">
                <span className="hover-underline-animation">Home</span>
              </NavLink>
            </li>
            <li className="nav-item px-1">
              <NavLink to={"/budget"} className="nav-link cta ">
                <span className="hover-underline-animation">Presupuesto</span>
              </NavLink>
            </li>
            {!verifyToken ? (
              <li className="nav-item px-2">
                <NavLink to={"/"} className="nav-link cta ">
                  <span className="hover-underline-animation">Login</span>
                </NavLink>
              </li>
            ) : (
              <LogOut />
            )}
            <li className="nav-item px-1">
              <NavLink to={"/algo2"} className="nav-link cta">
                #
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
