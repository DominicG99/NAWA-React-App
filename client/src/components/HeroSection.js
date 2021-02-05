import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video
        src="/videos/Video1.mp4"
        poster="../../images/poster.png"
        autoPlay
        loop
        muted
      />
    </div>
  );
}

export default HeroSection;
