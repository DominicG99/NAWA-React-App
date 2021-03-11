import React, { useContext } from "react";
import AuthContext from "./context/AuthContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MyNavBar from "./components/MyNavbar";
import "./App.css";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Register from "./components/pages/Register";
import MyFooter from "./components/MyFooter";
import login from "./components/pages/login";
import ProfilePage from "./components/pages/ProfilePage";
function MyRouter() {
  const { loggedIn } = useContext(AuthContext);
  console.log(loggedIn);
  return (
    <Router>
      <MyNavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={AboutUs} />
        {loggedIn === false && (
          <>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={login} />
          </>
        )}
        {loggedIn === true && (
          <>
            <Route exact path="/profile" component={ProfilePage} />
          </>
        )}

        <Redirect to="404" />
      </Switch>
      <MyFooter />
    </Router>
  );
}

export default MyRouter;
