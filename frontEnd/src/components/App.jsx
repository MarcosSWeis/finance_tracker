import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Anime from "./Anime";
import Login from "./Login";
import Register from "./Register";
import NavBar from "./NavBar";
import PrivateRoute from "./PrivateRoute";
import { DataProvider } from "../context/DataContext";
import FrameExpenses from "./FrameExpenses";
import GraphicsExpenses from "./GraphicsExpenses";
import "../css/signin.css";
import "../css/loader.css";
import "../css/carruselHome.css";
import "../css/cards-home.css";
import "react-loading-skeleton/dist/skeleton.css";
import "../css/custom-styles.css";
import "../css/effectHoverNavbar.css";
import "../css/handler-buttons-incomes.css";
import "../css/handler-buttons-expenses.css";
import "../css/btn-edit-rows-expenses.css";
import "../css/btn-delete-rows-expenses.css";
import "../css/btnSwitch.css";
import "../css/checkbox.css";
import "../css/modal.css";

export default function App() {
  return (
    <DataProvider>
      <NavBar />

      <Routes>
        <Route path="/" exact={true} element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/budget"
          element={
            <PrivateRoute>
              <Anime />
            </PrivateRoute>
          }
        />
        <Route
          path="home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/expenses"
          element={
            <PrivateRoute>
              <FrameExpenses />
            </PrivateRoute>
          }
        />
        <Route
          path="/graphics"
          element={
            <PrivateRoute>
              <GraphicsExpenses />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<h2>error 404</h2>} />
      </Routes>
    </DataProvider>
  );
}
