import React from "react";
import "../../App.css";
import ProfilePage from "../auth/ProfilePage";
import { hardCount } from "../HeroSection";


export default function Profile(){ 
    if (hardCount === 0) {
    return (
        <div>
            <p>hi</p>
          <ProfilePage />
        </div>
      );   
    }
  }

