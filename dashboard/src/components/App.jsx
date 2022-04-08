import { useEffect, useState } from "react";
import Home from "./Home";
import Navbar from "./NavBar";
import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router-dom";
import Users from "./User";
import Anime from "./Anime";
import Login from "./Login";
import "../css/signin.css";
import "../css/carruselHome.css";

import Register from "./Register";

import NavBar from "./NavBar";
export default function App() {
  function hideSidebar() {
    document.getElementById("sidebar").classList.toggle("desactive");
  }
  function hideMenu() {
    document.querySelector(".navbar-collapse").classList.toggle("d-block");
  }
  return (
    <>
      <NavBar />
      {/* <div className="wrapper">
        <Sidebar />
        
        <div id="content">
    <Navbar hideSidebar={hideSidebar} hideMenu={hideMenu} /> */}

      <Routes>
        <Route path="/" exact={true} element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/anime" element={<Anime />} />

        <Route path="/users" element={<Users />} />
      </Routes>
      {/*    </div>
    </div> */}
    </>
  );
}
