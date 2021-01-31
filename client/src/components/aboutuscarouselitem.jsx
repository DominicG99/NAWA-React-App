import React from "react";
import { Carousel } from "react-bootstrap";
import team from "../team.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/carousel.css";

function createItem(member) {
  return (
    <Carousel.Item key={member.id} interval={5000}>
      <img
        style={{
          width: "20%",
          borderRadius: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        className="d-block"
        src={`../images/${member.image}`}
        alt="name"
      />
      <Carousel.Caption>
        <a href={member.resume}>
          <FontAwesomeIcon
            style={{ color: "black" }}
            icon={faFilePdf}
            size="2x"
          />
        </a>
        <a href={member.github}>
          <FontAwesomeIcon
            style={{ color: "black", margin: "0% 1%" }}
            icon={faGithub}
            size="2x"
          />
        </a>
        <a href={member.linkedin}>
          <FontAwesomeIcon
            style={{ color: "#0072b1" }}
            icon={faLinkedin}
            size="2x"
          />
        </a>
        <h3 className="memberName">{member.name}</h3>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

function AboutUsCarouselItem() {
  return <Carousel>{team.map(createItem)}</Carousel>;
}

export default AboutUsCarouselItem;
