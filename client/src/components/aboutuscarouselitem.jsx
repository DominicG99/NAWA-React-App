import React from "react";
import { Carousel } from "react-bootstrap";
import team from "../team.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function createItem(member) {
  console.log(member);
  return (
    <Carousel.Item key={member.id} interval={5000}>
      <img
        style={{
          width: "33%",
          borderRadius: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        className="d-block"
        src={`../images/${member.image}.png`}
        alt="name"
      />
      <Carousel.Caption>
        <h3 style={{ color: "black" }}>{member.name}</h3>
        <p style={{ color: "black" }}>{member.school}</p>
        <a href={member.resume}>
          <FontAwesomeIcon
            style={{ color: "black" }}
            icon={faFilePdf}
            size="3x"
          />
        </a>
        <a href={member.github}>
          <FontAwesomeIcon
            style={{ color: "black", margin: "0% 1%" }}
            icon={faGithub}
            size="3x"
          />
        </a>
        <a href={member.linkedin}>
          <FontAwesomeIcon
            style={{ color: "#0072b1" }}
            icon={faLinkedin}
            size="3x"
          />
        </a>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

function AboutUsCarouselItem() {
  return <Carousel>{team.map(createItem)}</Carousel>;
}

export default AboutUsCarouselItem;
