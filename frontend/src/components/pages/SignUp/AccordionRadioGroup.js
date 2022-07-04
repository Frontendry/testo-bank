import React from "react";
import "tw-elements";

const AccordionRadioGroup = () => {
  return (
    <div
      className="accordion accordion-flush accordion-radio-group"
      id="businessAccountOpening"
    >
      <div className="accordion-item relative !border-0 rounded-0 bg-white shadow-md mb-5">
        <input
          type="radio"
          id="registeredBusinessRadio"
          name="businessAccountOpeningOptions"
        ></input>

        <label
          htmlFor="registeredBusinessRadio"
          className="relative border border-solid border-gray-100 rounded-md p-3"
        >
          <h2
            className="accordion-header mb-0"
            id="businessAccountOpeningHeadingOne"
          >
            <div
              className="accordion-button
              collapsed
                relative
                flex
                items-center
                w-full
                py-4
                px-5
                text-base !text-gray-800 text-left
                bg-white
                border-0
                rounded-none
                transition
                focus:outline-none"
              data-bs-toggle="collapse"
              data-bs-target="#businessAccountOpeningCollapseOne"
              aria-expanded="false"
              aria-controls="businessAccountOpeningCollapseOne"
            >
              I have a registered business / charity with CAC
            </div>
          </h2>

          <div
            id="businessAccountOpeningCollapseOne"
            className="accordion-collapse border-0 collapse text-gray-350"
            aria-labelledby="businessAccountOpeningHeadingOne"
            data-bs-parent="#businessAccountOpening"
          >
            <p>As a registered business you’ll get:</p>
            <ul className="mt-3">
              <li className="flex mb-2">
                <i className="bi bi-check-circle-fill text-emerald-300 mr-3"></i>
                Account in your business name
              </li>
              <li className="flex mb-2">
                <i className="bi bi-check-circle-fill text-emerald-300 mr-3"></i>
                Send to and receive transfers from all Nigerian banks
              </li>
              <li className="flex mb-2">
                <i className="bi bi-check-circle-fill text-emerald-300 mr-3"></i>
                Tools for business management
              </li>
            </ul>
          </div>
        </label>
      </div>

      <div className="accordion-item relative !border-0 rounded-0 bg-white shadow-md mb-5">
        <input
          type="radio"
          id="unRegisteredBusinessRadio"
          name="businessAccountOpeningOptions"
        ></input>

        <label
          htmlFor="unRegisteredBusinessRadio"
          className="relative border border-solid border-gray-100 rounded-md p-3"
        >
          <h2
            className="accordion-header mb-0"
            id="businessAccountOpeningHeadingTwo"
          >
            <div
              className="accordion-button
                collapsed
                relative
                flex
                items-center
                w-full
                py-4
                px-5
                text-base !text-gray-800 text-left
                bg-white
                border-0
                rounded-none
                transition
                focus:outline-none"
              data-bs-toggle="collapse"
              data-bs-target="#businessAccountOpeningCollapseTwo"
              aria-expanded="false"
              aria-controls="businessAccountOpeningCollapseTwo"
            >
              My business is not yet registered, I would like to register
            </div>
          </h2>

          <div
            id="businessAccountOpeningCollapseTwo"
            className="accordion-collapse border-0 collapse text-gray-350"
            aria-labelledby="businessAccountOpeningHeadingTwo"
            data-bs-parent="#businessAccountOpening"
          >
            <p>As an unregistered business you’ll get:</p>
            <ul className="mt-3">
              <li className="flex mb-2">
                <i className="bi bi-check-circle-fill text-emerald-300 mr-3"></i>
                Account in your business name
              </li>
              <li className="flex mb-2">
                <i className="bi bi-check-circle-fill text-emerald-300 mr-3"></i>
                Send to and receive transfers from all Nigerian banks
              </li>
              <li className="flex mb-2">
                <i className="bi bi-check-circle-fill text-emerald-300 mr-3"></i>
                Tools for business management
              </li>
            </ul>
          </div>
        </label>
      </div>

      <div className="accordion-item relative !border-0 rounded-0 bg-white shadow-md mb-5">
        <input
          type="radio"
          id="freelancerBusinessRadio"
          name="businessAccountOpeningOptions"
        ></input>
        <label
          htmlFor="freelancerBusinessRadio"
          className="relative border border-solid border-gray-100 rounded-md p-3"
        >
          <h2
            className="accordion-header mb-0"
            id="businessAccountOpeningHeadingThree"
          >
            <div
              className="accordion-button
                collapsed
                relative
                flex
                items-center
                w-full
                py-4
                px-5
                text-base !text-gray-800 text-left
                bg-white
                border-0
                rounded-none
                transition
                focus:outline-none"
              data-bs-toggle="collapse"
              data-bs-target="#businessAccountOpeningCollapseThree"
              aria-expanded="false"
              aria-controls="businessAccountOpeningCollapseThree"
            >
              I’m a freelancer I do business in my personal name
            </div>
          </h2>

          <div
            id="businessAccountOpeningCollapseThree"
            className="accordion-collapse border-0 collapse text-gray-350"
            aria-labelledby="businessAccountOpeningHeadingThree"
            data-bs-parent="#businessAccountOpening"
          >
            <p>As a freelancer business you’ll get:</p>
            <ul className="mt-3">
              <li className="flex mb-2">
                <i className="bi bi-check-circle-fill text-emerald-300 mr-3"></i>
                Account in your business name
              </li>
              <li className="flex mb-2">
                <i className="bi bi-check-circle-fill text-emerald-300 mr-3"></i>
                Send to and receive transfers from all Nigerian banks
              </li>
              <li className="flex mb-2">
                <i className="bi bi-check-circle-fill text-emerald-300 mr-3"></i>
                Tools for business management
              </li>
            </ul>
          </div>
        </label>
      </div>
    </div>
  );
};

export default AccordionRadioGroup;
