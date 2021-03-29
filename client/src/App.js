import React from "react";

import "./App.css";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";
import { UserContextProvider } from "./context/UserContext";
import { LocationContextProvider } from "./context/LocationContext";
import MyRouter from "./myRouter";

axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <AuthContextProvider>
        <LocationContextProvider>
          <MyRouter />
        </LocationContextProvider>
      </AuthContextProvider>
    </UserContextProvider>
  );
}

export default App;
