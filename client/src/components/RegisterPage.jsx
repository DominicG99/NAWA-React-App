import React from "react";
import LoginForm from "./RegisterForm";
import "./RegisterPage.css";
function RegisterPage() {
  return (
    <div className="registerContainer">
    <h1>Register here:</h1>
      <LoginForm />
    </div>
  );
}

export default RegisterPage;
