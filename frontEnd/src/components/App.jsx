import { useEffect, useState } from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Users from "./User";
import Anime from "./Anime";
import Login from "./Login";
import Register from "./Register";
import NavBar from "./NavBar";
import PrivateRoute from "./PrivateRoute";
import "../css/signin.css";
import "../css/loader.css";
import "../css/carruselHome.css";

export default function App() {
  const [errorToken, setErrorToken] = useState(null);
  const [verifyToken, setVerifyToken] = useState(null);

  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          exact={true}
          element={
            <Login errorToken={errorToken} setErrorToken={setErrorToken} />
          }
        />
        <Route path="/register" element={<Register />} />

        <Route
          path="/anime"
          element={
            <PrivateRoute
              setErrorToken={setErrorToken}
              setVerifyToken
              verifyToken
            >
              <Anime />
            </PrivateRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute
              setErrorToken={setErrorToken}
              setVerifyToken
              verifyToken
            >
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}
