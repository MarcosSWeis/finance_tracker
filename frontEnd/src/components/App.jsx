import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Users from "./User";
import Anime from "./Anime";
import Login from "./Login";
import Register from "./Register";
import NavBar from "./NavBar";
import PrivateRoute from "./PrivateRoute";
import { DataProvider } from "../context/DataContext";
import "../css/signin.css";
import "../css/loader.css";
import "../css/carruselHome.css";
import "../css/cards-home.css";
import "react-loading-skeleton/dist/skeleton.css";
import "../css/custom-styles.css";
import "../css/effectHoverNavbar.css";
import "../css/handler-buttons-incomes.css";
import "../css/handler-buttons-expenses.css";

export default function App() {
  return (
    <DataProvider>
      <NavBar />

      <Routes>
        <Route path="/" exact={true} element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/anime"
          element={
            <PrivateRoute>
              <Anime />
            </PrivateRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/users" element={<Users />} />
      </Routes>
    </DataProvider>
  );
}
