import React from "react";
import "../App.css";
import "./HeroSection.css";
import { Row, Col } from "antd";
import LocationInput from "./LocationInput";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />

      <h1 className="hero-overlay">Your Adventure Starts Now.</h1>
      <Row className="hero-input">
        <Col span={24} style={{ marginTop: ".5%" }}>
          <LocationInput />
        </Col>
      </Row>
    </div>
  );
}

export default HeroSection;
