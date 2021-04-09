import React, { useContext } from "react";
import { Button } from "antd";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router";
import "../Navbar.css";
function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();
  async function logOut() {
    await axios.get("http://localhost:5000/api/users/logout");
    await getLoggedIn();
    history.push("/");
  }
  return (
    <Button className="navbarButton" type="primary" onClick={logOut}>
      Log Out
    </Button>
  );
}

export default LogOutBtn;
