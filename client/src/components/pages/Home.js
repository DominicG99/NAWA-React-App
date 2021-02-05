import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import MapContainer from "../Map/MapContainer";
import "antd/dist/antd.css";
function Home() {
  return (
    <div>
      <HeroSection />

      <MapContainer />
    </div>
  );
}

export default Home;
