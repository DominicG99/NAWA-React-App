import React from "react";

import "./App.css";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";
import MyRouter from "./myRouter";

axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
      <MyRouter />
    </AuthContextProvider>
  );
}

export default App;
