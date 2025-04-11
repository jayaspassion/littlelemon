import React from "react";
import logo from "../assets/Logo.svg"; // Adjust the path as necessary
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Nav() {
  return (
    <header>
      <nav className="nav-bar box">
        <img src={logo} alt="Logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <HashLink smooth to="/#about">About</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#specials">Menu</HashLink>
          </li>
          {/* <li>
            <Link to="#menu">Menu</Link>
          </li> */}
          <li>
            <Link to="booking">Reservation</Link>
          </li>
          {/* <li>
            <Link to="#order-online">Order Online</Link>
          </li> */}
          <li>
            <Link to="login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Nav;
