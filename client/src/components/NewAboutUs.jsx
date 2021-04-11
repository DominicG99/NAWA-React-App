import React from "react";
import { Carousel } from "antd";
import "./newaboutus.css";

function NewAboutUs() {
  return (
    <div className="carouselContainer">
      <Carousel dotPosition="left" className="theCarousel">
        <div className="slide">
          <h1>Yooooo</h1>
        </div>
        <div className="slide">
          <h1>Dude</h1>
        </div>
        <div className="slide">
          <h1>Dude2</h1>
        </div>
        <div className="slide">
          <h1>Dude3</h1>
        </div>
        <div></div>
      </Carousel>
    </div>
  );
}

export default NewAboutUs;
