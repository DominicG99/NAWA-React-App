import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "antd";
import LogOutBtn from "./auth/LogOutBtn";

function MyNavBar() {
  const { loggedIn } = useContext(AuthContext);
  console.log(loggedIn);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-links">
                About Us
              </Link>
            </li>

            {loggedIn === false && (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-links">
                    Login
                  </Link>
                </li>{" "}
                <Link to="/register">
                  <Button type="primary" className="navbarButton">
                    Register
                  </Button>
                </Link>
              </>
            )}
            {/* If the user IS logged in, add some other stuff*/}
            {loggedIn === true && (
              <>
                <li className="nav-item">
                  <Link to="/profile" className="nav-links">
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
