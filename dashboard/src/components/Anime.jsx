import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Anime() {
  const [anime, setAnime] = useState(null);
  const token = JSON.parse(localStorage.getItem("accessToken"));
  //   const navigate = useNavigate();
  //   const noLoggedRedirect = (path) => navigate(`/${path}`, { replace: true });

  const navigate = useNavigate();
  //a navifate le paso com o 1° parametro a donde va a ir ,
  //como 2° parametro le seteo un objeto con la ruta a donde tiene que volver después de logearse
  // en la page de login lo capturo con useLocation (hoock)
  //y va a tener compo state propiedad state y la propiedad from que dentro va tener la ruta de conde vino
  //que es la misma que vamos a usar para redirigir una vez que este loggeado
  const noLoggedRedirect = (path) =>
    navigate(`/${path}`, { state: { from: { pathname: "/anime" } } });
  async function getAnime() {
    try {
      const config = {
        headers: {
          Authorization: `bearer ${token}`,
        },
      };
      const response = await axios.get(`http://localhost:3001/animes`, config);
      setAnime(response.data);
    } catch (err) {
      noLoggedRedirect("login");
    }
  }
  useEffect(() => {
    getAnime();
  }, []);

  return (
    <>
      {!anime ? (
        <div className="loader"></div>
      ) : (
        <>
          <h2 className="w-100">Estas en ANIME {anime.title}</h2>,
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            impedit ipsum? Numquam doloribus aspernatur, fugit ipsa sapiente
            esse commodi error natus voluptatum? Labore aspernatur veniam illum
            quisquam, non possimus molestias?
          </h2>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            impedit ipsum? Numquam doloribus aspernatur, fugit ipsa sapiente
            esse commodi error natus voluptatum? Labore aspernatur veniam illum
            quisquam, non possimus molestias?
          </h2>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            impedit ipsum? Numquam doloribus aspernatur, fugit ipsa sapiente
            esse commodi error natus voluptatum? Labore aspernatur veniam illum
            quisquam, non possimus molestias?
          </h2>
        </>
      )}
    </>
  );
}
