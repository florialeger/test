import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../../icon/menu.svg";
import "./Navbar.css";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className={`nav-links-container ${isNavOpen ? "active" : ""}`}>
        <ul>
          <li className={`nav-component ${isActive("/") ? "active-link" : ""}`}>
            <Link to="/" onClick={closeNav}>
              home
            </Link>
          </li>
        </ul>
        <ul>
          <li
            className={`nav-component ${
              isActive("/nav1") ? "active-link" : ""
            }`}
          >
            <Link to="/nav1" onClick={closeNav}>
              nav 1
            </Link>
          </li>
        </ul>
        <ul>
          <li
            className={`nav-component ${
              isActive("/nav2") ? "active-link" : ""
            }`}
          >
            <Link to="/nav2" onClick={closeNav}>
              nav 2
            </Link>
          </li>
        </ul>
        <ul>
          <li
            className={`nav-component ${
              isActive("/nav3") ? "active-link" : ""
            }`}
          >
            <Link to="/nav3" onClick={closeNav}>
              nav 3
            </Link>
          </li>
        </ul>
        <ul>
          <li
            className={`nav-component ${
              isActive("/nav4") ? "active-link" : ""
            }`}
          >
            <Link to="/nav4" onClick={closeNav}>
              nav 4
            </Link>
          </li>
        </ul>
        <ul>
          <li
            className={`nav-component ${
              isActive("/nav5") ? "active-link" : ""
            }`}
          >
            <Link to="/nav5" onClick={closeNav}>
              nav 5
            </Link>
          </li>
        </ul>
        <ul>
          <li
            className={`nav-component ${
              isActive("/nav6") ? "active-link" : ""
            }`}
          >
            <Link to="/nav6" onClick={closeNav}>
              nav 6
            </Link>
          </li>
        </ul>
        <ul>
          <li
            className={`nav-component ${
              isActive("/nav7") ? "active-link" : ""
            }`}
          >
            <Link to="/nav7" onClick={closeNav}>
              nav 7
            </Link>
          </li>
        </ul>
        <ul>
          <li
            className={`nav-component ${
              isActive("/nav8") ? "active-link" : ""
            }`}
          >
            <Link to="/nav8" onClick={closeNav}>
              nav 8
            </Link>
          </li>
        </ul>
      </div>

      <div className="nav-reduced" onClick={handleClick}>
        <MenuIcon alt="menu" className="menu-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
