import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  //Fixes button bug on navbar
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            NJAWA
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon
              icon={click ? faTimes : faBars}
              size="2x"
              className="fa-times"
            />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/register"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">register</Button>}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
