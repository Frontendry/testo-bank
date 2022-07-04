import React from "react";
import RegisterOrLoginLink from "../../general-components/RegisterOrLoginLink";
import PreviousStepButton from "./PreviousStepButton";

const SignUpContentAreaHeader = ({ hidePrev, desc, link, linkText }) => {
  return (
    <div className="px-4 md:px-20 py-6 flex items-center">
      {hidePrev === "true" ? "" : <PreviousStepButton />}

      <RegisterOrLoginLink desc={desc} link={link} linkText={linkText} />
    </div>
  );
};

export default SignUpContentAreaHeader;
