import React from "react";
import "../styles/footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="footer">
      <p>Not A Weather App ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
