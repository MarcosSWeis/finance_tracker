import { useEffect, useState } from "react";
import axios from "axios";
import { controllerUser } from "../services/request/users";
import { Link, useNavigate, useLocation } from "react-router-dom";
let errors = {};
const loginStateInitial = {
  email: "",
  password: "",
  remember_me: false,
};
export default function Login() {
  const [login, setDataLogin] = useState(loginStateInitial);
  const [userLogged, setUserLogged] = useState(() =>
    window.localStorage.getItem("accessToken")
  );
  const navigate = useNavigate();
  const previousPage = (nextPage) => navigate(`${nextPage}`);
  useEffect(() => {
    if (userLogged) navigate("/home");
  }, []);

  console.log(userLogged, "userloaged");
  const location = useLocation();
  console.log(location, "location");

  let { from } = location.state || { from: { pathname: "/" } };
  console.log(from, "from");

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

    //email
    const validateEmail = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (login.email === "") {
      errors.email = "Debe llenar el campo Email";
    } else if (!validateEmail.exec(email.value)) {
      errors.email = "El email debe ser un email valido";
    } else {
      if (errors.email) {
        delete errors.email;
        email.classList.remove("is-invalid");
        errorEmail.innerText = "";
      }
    }
    //PASSWORD
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;
    if (login.password === "") {
      errors.password = "Debe llenar el campo contraseña";
    } else if (!login.password.match(lowerCaseLetters)) {
      errors.password = "La contraseña debe tener al menos un minúscula";
    } else if (!login.password.match(upperCaseLetters)) {
      errors.password = "La contraseña debe tener al menos un mayúscula";
    } else if (!login.password.match(numbers)) {
      errors.password = "La contraseña debe tener al menos un numero";
    } else if (login.password.length < 8) {
      errors.password = "La contraseña debe tener al menos 8 caracteres";
    } else {
      if (errors.password) {
        delete errors.password;
        password.classList.remove("is-invalid");
        errorPassword.innerText = "";
      }
    }

    if (Object.keys(errors) == 0) {
      // const formData = new FormData(formLogin);
      controllerUser.login(login).then((response) => {
        if (response.data.accessToken) {
          setUserLogged(true);
          localStorage.setItem(
            "accessToken",
            JSON.stringify(response.data.accessToken)
          );
          navigate("/home");
          // previousPage(from.pathname);
        }
      });
    } else {
      if (errors.email) {
        email.classList.add("is-invalid");
        errorEmail.innerText = errors.email;
      }
      if (errors.password) {
        password.classList.add("is-invalid");
        errorPassword.innerText = errors.password;
      }
    }
  }
  return (
    <main className="mx-auto w-25 text-center ">
      <form onSubmit={handlerSubmit} id="formLogin" className="w-80 mx-auto">
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
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
                console.log(e.target.checked);
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
  );
}
