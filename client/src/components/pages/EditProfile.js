import React, { useEffect, useState } from "react";
import EditProfileForm from "../auth/EditProfileForm";
import UserProfileInformation from "../auth/UserProfileInformation";
import ImageUpload from "../ImageUpload";
import "./editprofile.css";

export default function EditProfile() {
  const [seconds, setSeconds] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
               // clearing interval
    return () => clearInterval(timer);
  });
    return (
      <div className="profileContainer">
        <UserProfileInformation />
        <ImageUpload/>
        {/* <EditProfileForm /> */}
      </div>
    )
}
  
