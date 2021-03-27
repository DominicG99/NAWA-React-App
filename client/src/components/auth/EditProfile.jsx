import React from "react";
import EditProfileForm from "./EditProfileForm";
import "./EditProfile.css";

function EditProfilePage() {
  return (
    <div className="editProfileContainer">
      <h1 className="header">Edit your profile here:</h1>
      <div className="centered">
        <EditProfileForm />
      </div>
    </div>
  );
}

export default EditProfilePage;
