import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";
import LogOutBtn from "./auth/LogOutBtn";
function MyNavBar() {
  const { loggedIn } = useContext(AuthContext);
  console.log(loggedIn);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
    window.addEventListener("resize", showButton);
    return () => {
      window.removeEventListener("resize", showButton);
    };
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Logo
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

            {loggedIn === false && (
              <>
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Link>
                </li>{" "}
                <Link to="/register" onClick={closeMobileMenu}>
                  {button && (
                    <Button type="primary" ghost>
                      register
                    </Button>
                  )}
                </Link>
              </>
            )}
            {/* If the user IS logged in, add some other stuff*/}
            {loggedIn === true && (
              <>
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
                  <LogOutBtn />
                </li>{" "}
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default MyNavBar;
