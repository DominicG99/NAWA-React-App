import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <h1>Meet the team and instructors</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="placeholder-image.png"
              text="Dominic Ginter"
              label="Dominic Ginter"
            />
            <CardItem
              src="placeholder-image.png"
              text="Dominic Ginter"
              label="Something"
            />
            <CardItem
              src="placeholder-image.png"
              text="Dominic Ginter"
              label="Something"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
