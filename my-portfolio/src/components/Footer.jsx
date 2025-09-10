import React from "react";
import "./../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} Yazan Alhassanat. All Rights Reserved.
    </footer>
  );
};

export default Footer;
