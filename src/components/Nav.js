import React from "react";
import logo from "../assets/Logo.svg"; // Adjust the path as necessary

function Nav() {
  return (
    <header>
      <nav className="nav-bar box">
        <img src={logo} alt="Logo" />
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#reservation">Reservation</a>
          </li>
          <li>
            <a href="#order-online">Order Online</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Nav;
