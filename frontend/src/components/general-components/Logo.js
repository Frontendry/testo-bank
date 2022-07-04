import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/testo-logo-white.png";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Testo" />
    </Link>
  );
};

export default Logo;
