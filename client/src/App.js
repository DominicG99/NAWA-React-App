import React from "react";
import MyNavbar from "./components/MyNavbar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Register from "./components/pages/Register";
import MyFooter from "./components/MyFooter";
import login from "./components/pages/login";
import ProfilePage from "./components/pages/ProfilePage";

function App() {
  return (
    <>
      <Router>
        <MyNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/login" component={login} />
          <Redirect to="404" />
        </Switch>
        <MyFooter />
      </Router>
    </>
  );
}

export default App;
