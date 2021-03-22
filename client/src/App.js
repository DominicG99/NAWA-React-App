import React from "react";

import "./App.css";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";
import { UserContextProvider } from "./context/UserContext";
import MyRouter from "./myRouter";

axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
    <AuthContextProvider>
      <MyRouter />
    </AuthContextProvider>
    </UserContextProvider>
  );
}

export default App;
