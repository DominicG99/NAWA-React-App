import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import team from "../team.js";
import Icons from "./Icons";
function createItem(member) {
  return (
    <CardItem
      key={member.id}
      src={`../images/${member.image}`}
      text={<Icons githubLink={member.github} linkedInLink={member.linkedin} />}
      label={member.name}
      alt={member.name}
    />
  );
}
function Cards() {
  return (
    <div className="cards">
      <h1>Meet the team and instructors</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">{team.map(createItem)}</ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
