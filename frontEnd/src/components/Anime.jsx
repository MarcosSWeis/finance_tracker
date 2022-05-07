import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { controllerBudget } from "../services/request/budget";
export default function Anime() {
  const [data, setData] = useState(null);
  const token = JSON.parse(localStorage.getItem("accessToken"));
  const navigate = useNavigate();

  async function getAnime() {
    const response = await controllerBudget.getAnime();

    setData(response.data);
  }
  useEffect(() => {
    getAnime();
  }, []);

  return (
    <>
      {!data ? (
        <div className="spinner">
          <div className="dot1"></div>
          <div className="dot2"></div>
          <div className="dot3"></div>
        </div>
      ) : (
        <>
          <div className="w-75 mx-auto">
            <h2 className="w-100">Estas en ANIME {data.title}</h2>,
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              impedit ipsum? Numquam doloribus aspernatur, fugit ipsa sapiente
              esse commodi error natus voluptatum? Labore aspernatur veniam
              illum quisquam, non possimus molestias?
            </h2>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              impedit ipsum? Numquam doloribus aspernatur, fugit ipsa sapiente
              esse commodi error natus voluptatum? Labore aspernatur veniam
              illum quisquam, non possimus molestias?
            </h2>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              impedit ipsum? Numquam doloribus aspernatur, fugit ipsa sapiente
              esse commodi error natus voluptatum? Labore aspernatur veniam
              illum quisquam, non possimus molestias?
            </h2>
          </div>
        </>
      )}
    </>
  );
}
