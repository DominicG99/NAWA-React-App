import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/Video1.mp4" autoPlay loop muted />
      <h1>START YOUR ADVENTURE NOW</h1>
      <p>No time to waste.</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          SIGN IN <FontAwesomeIcon icon={faSignInAlt} size="1x" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
