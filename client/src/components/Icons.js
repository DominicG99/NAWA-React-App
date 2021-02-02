import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Icons.css";
import { Link } from "react-router-dom";
function Icons(props) {
  return (
    <div>
      <Link to={props.resumeLink}>
        <FontAwesomeIcon icon={faFilePdf} size="2x" className="resumeIcon" />
      </Link>
      <Link to={props.githubLink}>
        <FontAwesomeIcon icon={faGithub} size="2x" className="githubIcon" />
      </Link>
      <Link to={props.linkedInLink}>
        <FontAwesomeIcon icon={faLinkedin} size="2x" className="linkedInIcon" />
      </Link>
    </div>
  );
}

export default Icons;
