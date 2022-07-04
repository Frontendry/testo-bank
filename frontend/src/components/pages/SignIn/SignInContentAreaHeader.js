import React from "react";
import RegisterOrLoginLink from "../../general-components/RegisterOrLoginLink";

const SignInContentAreaHeader = ({ desc, link, linkText }) => {
  return (
    <div className="px-4 md:px-20 py-6 flex items-center">
      <RegisterOrLoginLink desc={desc} link={link} linkText={linkText} />
    </div>
  );
};

export default SignInContentAreaHeader;
