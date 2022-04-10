import { useEffect, useState } from "react";
import axios from "axios";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { HandlerErrors } from "../helpers/lib";
import validationFormLogin from "../helpers/handlerValidationLogin";
let errors = {};
const loginStateInitial = {
  email: "",
  password: "",
  remember_me: false,
};
export default function Login({ errorToken, setErrorToken }) {
  const [login, setDataLogin] = useState(loginStateInitial);
  const [userLogged, setUserLogged] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handlerChange(event) {
    setDataLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  }

  function handlerSubmit(event) {
    event.preventDefault();
    const email = document.getElementById("email");
    const errorEmail = document.getElementById("errorEmail");
    const password = document.getElementById("password");
    const errorPassword = document.getElementById("errorPassword");
    let elements = {
      email,
      errorEmail,
      password,
      errorPassword,
    };
    validationFormLogin(
      elements,
      login,
      setError,
      setUserLogged,
      navigate,
      setErrorToken
    );
  }
  return (
    <>
      <main className="mx-auto  text-center px-4 ">
        <form onSubmit={handlerSubmit} id="formLogin" className="mw-75 mx-auto">
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          {error && <p className="text-danger"> {error} </p>}
          {errorToken && <p className="text-danger"> {errorToken} </p>}
          <div className="form-floating">
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              onChange={handlerChange}
            />
            <label htmlFor="email">Email address</label>
          </div>
          <p id="errorEmail"></p>
          <div className="form-floating">
            <input
              name="password"
              type="password"
              className="form-control"
              id="password"
              placeholder="Contraseña"
              onChange={handlerChange}
            />
            <label htmlFor="password">Password</label>
          </div>
          <p id="errorPassword"></p>

          <div className="checkbox mb-3">
            <label>
              <input
                name="remember_me"
                type="checkbox"
                value=""
                onChange={function (e) {
                  //  console.log(e.target.checked);
                  setDataLogin({
                    ...login,
                    remember_me: e.target.checked,
                  });
                }}
              />
              Remember me
            </label>
          </div>
          <button
            className="w-100 btn btn-lg btn-primary mb-3 p-1 btnSubmit"
            type="submit"
            name="btnSubmit"
          >
            Login
          </button>
          <Link to={"/register"}>
            <button className="w-100 btn btn-lg btn-primary col-2 p-1">
              Registrarse
            </button>
          </Link>
        </form>
      </main>
    </>
  );
}
