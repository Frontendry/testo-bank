import React from "react";
import { Link } from "react-router-dom";

const RegisterOrLoginLink = ({ desc, link, linkText }) => {
  return (
    <div className="ml-auto">
      <span>{desc}</span>{" "}
      <Link to={link} className="text-red-350">
        {linkText}
      </Link>
    </div>
  );
};

export default RegisterOrLoginLink;
