import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo.js";
import "./NavBar.css"; // Asegurate de tener estilos si querés mantener diseño

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <Logo />
        </Link>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/panel">Panel</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/form/test">Demo Form</Link>
            </li>
          </ul>
          
          <b className="app-title">Seguimiento de Ventas</b>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
