import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Designed by Istiak <br> Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
