import React from "react";
import { useSignUpData } from "../../../context/signup.context";

const FormFields = () => {
  // Get some stuff from the sign up context
  const { formData, setFormData } = useSignUpData();

  const { firstname, lastname, telPrefix, tel, email, password } = formData;

  // Input onchange handler
  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      <div className="form-floating mb-6">
        <input
          type="text"
          className="form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-350
                  bg-zinc-100 bg-clip-padding border-t-0 border-x-0
                  border-b-2 border-solid border-zinc-250
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:border-t-0 focus:border-x-0 focus:border-red-350 focus:outline-none"
          id="firstname"
          value={firstname}
          name="firstname"
          placeholder=" First Name"
          onChange={onChangeHandler}
        />
        <label htmlFor="firstname" className="text-gray-700">
          First Name
        </label>
      </div>

      <div className="form-floating mb-6">
        <input
          type="text"
          className="form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-350
                  bg-zinc-100 bg-clip-padding border-t-0 border-x-0
                  border-b-2 border-solid border-zinc-250
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:border-t-0 focus:border-x-0 focus:border-red-350 focus:outline-none"
          id="lastname"
          value={lastname}
          name="lastname"
          placeholder="Last Name"
          onChange={onChangeHandler}
        />
        <label htmlFor="lastname" className="text-gray-700">
          Last Name
        </label>
      </div>

      <div className="mb-6 flex flex-wrap items-center">
        <div className="form-floating w-full md:w-1/3 md:pr-3 mb-6 md:mb-0">
          <input
            type="text"
            className="form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-350
                  bg-zinc-100 bg-clip-padding border-t-0 border-x-0
                  border-b-2 border-solid border-zinc-250
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:border-t-0 focus:border-x-0 focus:border-red-350 focus:outline-none"
            id="telPrefix"
            value={telPrefix}
            name="telPrefix"
            placeholder="Country Code"
            onChange={onChangeHandler}
          />
          <label htmlFor="telPrefix" className="text-gray-700">
            Country Code
          </label>
        </div>

        <div className="form-floating w-full md:w-2/3">
          <input
            type="tel"
            className="form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-350
                  bg-zinc-100 bg-clip-padding border-t-0 border-x-0
                  border-b-2 border-solid border-zinc-250
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:border-t-0 focus:border-x-0 focus:border-red-350 focus:outline-none"
            id="tel"
            value={tel}
            name="tel"
            placeholder="Tel"
            onChange={onChangeHandler}
          />
          <label htmlFor="tel" className="text-gray-700">
            Tel
          </label>
        </div>
      </div>

      <div className="form-floating mb-6">
        <input
          type="email"
          className="form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-350
                  bg-zinc-100 bg-clip-padding border-t-0 border-x-0
                  border-b-2 border-solid border-zinc-250
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:border-t-0 focus:border-x-0 focus:border-red-350 focus:outline-none"
          id="email"
          value={email}
          name="email"
          placeholder="Email address"
          onChange={onChangeHandler}
        />
        <label htmlFor="email" className="text-gray-700">
          Email address
        </label>
      </div>

      <div className="form-floating mb-6">
        <input
          type="password"
          className="form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-350
                  bg-zinc-100 bg-clip-padding border-t-0 border-x-0
                  border-b-2 border-solid border-zinc-250
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:border-t-0 focus:border-x-0 focus:border-red-350 focus:outline-none"
          id="password"
          value={password}
          name="password"
          placeholder="Create Password"
          onChange={onChangeHandler}
        />
        <label htmlFor="lastname" className="text-gray-700">
          Create Password
        </label>
      </div>
    </div>
  );
};

export default FormFields;
