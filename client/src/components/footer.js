import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Not A Weather App ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
