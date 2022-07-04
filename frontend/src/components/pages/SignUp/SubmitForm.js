import React from "react";

const SubmitForm = () => {
  return (
    <button
      type="submit"
      className="inline-block px-7 py-3 h-14 bg-red-350 text-white font-semibold rounded shadow-md hover:bg-red-400 hover:shadow-lg focus:bg-red-500 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-full"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
    >
      Submit
    </button>
  );
};

export default SubmitForm;
