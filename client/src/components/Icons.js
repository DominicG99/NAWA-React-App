import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Icons.css";
function Icons(props) {
  return (
    <div>
      <a target="_blank" href={props.resume} rel="noreferrer">
        <FontAwesomeIcon
          icon={faFilePdf}
          size="3x"
          style={{ color: "red" }}
          className="icon"
        />
      </a>
      <a target="_blank" href={props.githubLink} rel="noreferrer">
        <FontAwesomeIcon
          icon={faGithub}
          size="3x"
          style={{ color: "black", marginLeft: "10%", marginRight: "10%" }}
          className="icon"
        />
      </a>
      <a target="_blank" href={props.linkedInLink} rel="noreferrer">
        <FontAwesomeIcon
          icon={faLinkedin}
          size="3x"
          style={{ color: "#0e76a8" }}
          className="icon"
        />
      </a>
    </div>
  );
}

export default Icons;
