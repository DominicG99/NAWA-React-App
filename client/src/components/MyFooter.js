import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="footer">
      <p>Not Just A Weather App ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
