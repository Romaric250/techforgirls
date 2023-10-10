import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./navbar.css";

const NavbarMenue = () => {
  return (
    <>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  window.addEventListener("scroll", () => {
    let nav = document.querySelector(".nav-container");

    if (scrollY > 0) {
      nav.classList.add("nav-scroll");
    } else {
      nav.classList.remove("nav-scroll");
    }
  });
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <img className="logo-img" src={logo} alt="logo" />
      </div>
      <div className="nav-container-wrapper">
        <NavbarMenue />
      </div>

      <div className="navbar-menu">
        {toggleMenu ? (
          <FaTimes
            color="black"
            size={35}
            posiition="absolute"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <FaBars color="black" size={35} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="menu-container">
            <div className="menu-wrapper">
              <NavbarMenue />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
