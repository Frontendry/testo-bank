import React from "react";

const FormStepDescription = ({ title, subtitle }) => {
  return (
    <div className="mb-10">
      <h1 className="text-purple-960 text-3xl font-semibold mb-2 ">{title}</h1>
      <p className="text-gray-350 text-lg">{subtitle}</p>
    </div>
  );
};

export default FormStepDescription;
