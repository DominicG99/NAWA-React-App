import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
//Pages
import MainPage from "./pages/index";
import NotFoundPage from "./pages/404";
import AboutUsPage from "./pages/aboutus";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
function App() {
  return (
    //This helps have multiple webpages within React.
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/about-us" component={AboutUsPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
