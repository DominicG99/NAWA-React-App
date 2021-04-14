import React from "react";
import EditProfileForm from "../auth/EditProfileForm";
import UserProfileInformation from "../auth/UserProfileInformation";
import ImageUpload from "../ImageUpload";
import "./editprofile.css";

export default function EditProfile() {
  return (
    <div className="profileContainer">
      <UserProfileInformation />
      <ImageUpload />
      {/* <EditProfileForm /> */}
    </div>
  );
}
