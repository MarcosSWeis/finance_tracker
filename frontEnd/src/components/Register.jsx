import { useEffect, useState } from "react";
import validationRegister from "../helpers/handlerValidationRegister";
import { controllerUser } from "../services/request/users";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
let errors = {};
const userStateInitial = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  nickName: "",
};
export default function Register() {
  const [user, setUser] = useState(userStateInitial);
  const [file, setFile] = useState();
  const navigate = useNavigate();
  function handlerChange(event) {
    //...inputsRegister, le figo que me ponga el valor de lso inputs que tiene en ese momento
    //porque sino , escribo en el fistName y lo que escribí en el lastName se me borra
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }
  async function handlerSubmit(event) {
    event.preventDefault();

    const formRegisters = document.getElementById("formRegisters");
    const firstName = document.getElementById("firstName");
    const errorFirstName = document.getElementById("errorFirstName");
    const lastName = document.getElementById("lastName");
    const errorLastName = document.getElementById("errorLastName");
    const email = document.getElementById("email");
    const errorEmail = document.getElementById("errorEmail");
    const password = document.getElementById("password");
    const errorPassword = document.getElementById("errorPassword");
    const confirmPassword = document.getElementById("confirmPassword");
    const errorConfirmPassword = document.getElementById(
      "errorConfirmPassword"
    );
    const nickName = document.getElementById("nickName");
    const errorNickName = document.getElementById("errorNickName");
    const avatar = document.getElementById("avatar");
    const errorAvatar = document.getElementById("errorAvatar");

    let values = {
      firstName,
      errorFirstName,
      lastName,
      errorLastName,
      email,
      errorEmail,
      password,
      errorPassword,
      confirmPassword,
      errorConfirmPassword,
      nickName,
      errorNickName,
      avatar,
      errorAvatar,
    };
    validationRegister(values, user, file, formRegisters, navigate);
  }
  return (
    <main className="mx-auto  text-center px-4  ">
      <div className="mx-auto pt-5 ">
        <form onSubmit={handlerSubmit} id="formRegisters">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Nombre
            </label>
            <input
              name="firstName"
              type="text"
              onChange={handlerChange}
              className="form-control"
              id="firstName"
              placeholder="Nombre"
              value={user.firstName}
            />
          </div>

          <p className="text-danger" id="errorFirstName"></p>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Apellido
            </label>
            <input
              name="lastName"
              type="text"
              onChange={handlerChange}
              className="form-control"
              id="lastName"
              placeholder="Apellido"
              value={user.lastName}
            />
          </div>
          <p className="text-danger" id="errorLastName"></p>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              name="email"
              type="email"
              onChange={handlerChange}
              className="form-control"
              id="email"
              placeholder="Email"
              value={user.email}
            />
          </div>
          <p className="text-danger" id="errorEmail"></p>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input
              name="password"
              type="password"
              onChange={handlerChange}
              className="form-control"
              id="password"
              placeholder="Contraseña"
              value={user.password}
            />
          </div>
          <p className="text-danger" id="errorPassword"></p>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Confirmar Contraseña
            </label>
            <input
              name="confirmPassword"
              type="password"
              onChange={handlerChange}
              className="form-control"
              id="confirmPassword"
              placeholder="Confirmar Contraseña"
              value={user.confirmPassword}
            />
          </div>
          <p className="text-danger" id="errorConfirmPassword"></p>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Apodo
            </label>
            <input
              name="nickName"
              type="text"
              onChange={handlerChange}
              className="form-control"
              id="nickName"
              placeholder="Apodo"
              value={user.nickName}
            />
          </div>
          <p className="text-danger" id="errorNickName"></p>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label ">
              Avatar
            </label>
            <input
              name="avatar"
              type="file"
              onChange={(e) => setFile(e.target.files)}
              className="form-control"
              id="avatar"
              value={user.avatar}
              multiple
            />
          </div>
          <p className="text-danger" id="errorAvatar"></p>
          <button type="submit" id="btnRegister" className="btn btn-primary">
            Registrarme
          </button>
        </form>
      </div>
    </main>
  );
}
