import React, { Link } from "react-router-dom";
export default function Sidebar() {
  function homeSubMenu() {
    document.getElementById("homeSubmenu").classList.toggle("d-block");
  }
  function homeSubPages() {
    document.getElementById("pageSubmenu").classList.toggle("d-block");
  }
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <h3>Bootstrap Sidebar</h3>
      </div>

      <ul className="list-unstyled components">
        <p>AnimeM.y.B.</p>
        <li>
          <Link to={"/home"} data-toggle="collapse" aria-expanded="false">
            Home
          </Link>
        </li>

        <li className="active" onClick={homeSubMenu}>
          <a
            href="#"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            ...
          </a>
          <ul className="collapse list-unstyled" id="homeSubmenu">
            <li>
              <Link to={"/home1"}>Home 1</Link>
            </li>
            <li>
              <a href="#">Home 2</a>
            </li>
            <li>
              <a href="#">Home 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Sobre Nosotros</a>
        </li>
        <li onClick={homeSubPages}>
          <a
            href="#pageSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            Paginas
          </a>
          <ul className="collapse list-unstyled" id="pageSubmenu">
            <li>
              <a href="#">Page 1</a>
            </li>
            <li>
              <a href="#">Page 2</a>
            </li>
            <li>
              <a href="#">Page 3</a>
            </li>
          </ul>
        </li>
        <li>
          <Link to={"/users"}>Usuario</Link>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <ul className="list-unstyled CTAs">
        <li>
          <a href="#" className="download">
            Download source
          </a>
        </li>
        <li>
          <a href="#" className="article">
            Back to article
          </a>
        </li>
      </ul>
    </nav>
  );
}
