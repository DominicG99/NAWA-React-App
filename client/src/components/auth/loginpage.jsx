import React from "react";
import LoginForm from "./LoginForm";
import "./loginpage.css";

function loginpage() {
  return (
    <div className="loginContainer">
      <h1>Login here:</h1>
      <LoginForm />
    </div>
  );
}

export default loginpage;
