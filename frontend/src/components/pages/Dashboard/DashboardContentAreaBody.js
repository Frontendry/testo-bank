import React from "react";
import { useAuth } from "../../../context/auth.context";

import currentAccounData from "../../../assets/images/current-account-data.png";
import monthlyActivities from "../../../assets/images/monthly-activities.png";
import cashOutflow from "../../../assets/images/cash-outflow.png";

const DashboardContentAreaBody = () => {
  const { token } = useAuth();

  const isObject = (val) => {
    return val instanceof Object;
  };

  let displayName;

  if (token && !isObject(token)) {
    displayName = JSON.parse(token).firstName;
  } else if (token && isObject(token)) {
    displayName = token.firstName;
  } else {
    displayName = "";
  }

  return (
    <div className="py-10 px-4 xl:px-20 ">
      <div className="flex flex-col xl:flex-row items-start xl:items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Welcome back, {displayName}
          </h2>
          <p className="text-gray-500">
            Here’s what has been happening in the last 7 days
          </p>
        </div>

        <div className="mt-8 xl:mt-0 xl:ml-auto">
          <button
            type="button"
            className="inline-block px-7 py-3 h-14 bg-red-350 text-white font-semibold rounded shadow-md hover:bg-red-400 hover:shadow-lg focus:bg-red-500 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Add a sub account
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <figure>
          <img
            src={currentAccounData}
            alt="Dashboard data sample"
            className="w-full"
          />
        </figure>

        <figure>
          <img
            src={currentAccounData}
            alt="Dashboard data sample"
            className="w-full"
          />
        </figure>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <figure>
          <img
            src={monthlyActivities}
            alt="Monthly Activities Sample"
            className="w-full"
          />
        </figure>

        <figure>
          <img src={cashOutflow} alt="Cash outflow sample" className="w-full" />
        </figure>
      </div>
    </div>
  );
};

export default DashboardContentAreaBody;
