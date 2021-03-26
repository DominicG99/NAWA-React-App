import React from "react";
import EditProfileForm from "./EditProfileForm";
import "./EditProfile.css";

function EditProfilePage() {
  return (
    <div class="editProfileContainer">
      <h1 class="header">Edit your profile here:</h1>
      <div class="centered">
         <EditProfileForm />
      </div>
    </div>
  );
}

export default EditProfilePage;