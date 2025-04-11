import React from "react";
import Logo from "../assets/Asset 20@4x.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={Logo} alt="Little Lemon Logo" />
      </div>

      <div className="footer-section">
        <h3>Doormat Navigation</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <HashLink smooth to="#about">
              About
            </HashLink>
          </li>
          <li>
            <Link to="#menu">Menu</Link>
          </li>
          <li>
            <Link to="booking">Reservation</Link>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Contact</h3>
        <ul>
          <li>Address: 123 Lemon Street, Chicago</li>
          <li>Phone: (123) 456-7890</li>
          <li>Email: contact@littlelemon.com</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Social Media</h3>
        <ul>
          <li>
            <Link to="/">Instagram</Link>
          </li>
          <li>
            <Link to="/">Facebook</Link>
          </li>
          <li>
            <Link to="/">Twitter</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
