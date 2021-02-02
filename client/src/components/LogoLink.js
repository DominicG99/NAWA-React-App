import React from "react";
import "./LogoLink.css";
function LogoLink(props) {
  return (
    <a href={props.website} target="_blank" rel="noreferrer">
      <img
        src={props.image}
        alt={props.name}
        className="logo"
        style={{ width: "50%" }}
      />
    </a>
  );
}

export default LogoLink;
