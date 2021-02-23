import React from "react";
import MyNavbar from "./components/MyNavbar";

import { Provider } from "react-redux";
import store from "./store";

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

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <MyNavbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={login} />
            <Redirect to="404" />
          </Switch>
          <MyFooter />
        </Router>
      </Provider>
    </>
  );
}

export default App;
