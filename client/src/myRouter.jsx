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
import Preferences from "./components/pages/Preferences";
import EditProfile from "./components/pages/EditProfile";
import MapPage from "./components/pages/MapPage";
import Image from "./components/pages/Image";
function MyRouter() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <Router>
      <MyNavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/map" component={MapPage} />
        {loggedIn === false && (
          <>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={login} />
          </>
        )}
        {loggedIn === true && (
          <>
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/editProfile" component={EditProfile} />
            <Route exact path="/preferences" component={Preferences} />
            <Route exact path="/images" component={Image} />

          </>
        )}

        <Redirect to="404" />
      </Switch>
      <MyFooter />
    </Router>
  );
}

export default MyRouter;
