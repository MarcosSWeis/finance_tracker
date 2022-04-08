import React from "react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { prettyDOM } from "@testing-library/dom";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";
//it y test son lo mismo

describe("test login", () => {
  let component;
  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  });

  test("render content", () => {
    //puesto si sin commillas y entre /texto/ es puestocomo expresion regular y si le ponemso la i depues le decimos ignore =>  getByText(/texto a buscar/i)
    const h1 = component.getByText(/please sign in/i);
    console.log(prettyDOM(h1));

    // console.log(prettyDOM(h1));
  });

  test("should render the form elements", () => {
    const btnSubmit = component.getByRole("button", {
      name: "Login",
    });
    const inputEmail = component.getByLabelText(/Email address/);
    const inputPassword = component.getByLabelText(/Password/);
    const errorEmail = component.container.querySelector("#errorEmail");
    const errorPassword = component.container.querySelector("#errorPassword");
    expect(inputEmail).toBeDefined();
    expect(inputPassword).toBeDefined();
    expect(btnSubmit).toBeDefined();
    fireEvent.change(inputEmail, { target: { value: "" } });
    fireEvent.change(inputPassword, { target: { value: "" } });
    fireEvent.click(btnSubmit);
    component.debug();
    expect(errorEmail).toHaveTextContent("Debe llenar el campo Email");

    // expect(errorPassword).toBe("Debe llenar el campo contraseña");
  });
});
