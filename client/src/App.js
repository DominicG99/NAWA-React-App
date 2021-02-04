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
function App() {
  return (
    <>
      <Router>
        <MyNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/sign-up" component={Register} />
          <Redirect to="404" />
        </Switch>
        <MyFooter />
      </Router>
    </>
  );
}

export default App;
