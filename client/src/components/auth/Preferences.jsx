import React from "react";
import PreferencesForm from "./PreferencesForm";
import "./Preferences.css";

function Preferences() {
  return (
    <div className="editProfileContainer">
      <h1 className="header">Input your preferences below:</h1>
      <div className="centered">
        <PreferencesForm />
      </div>
    </div>
  );
}

export default Preferences;