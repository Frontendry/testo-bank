import React from "react";
import { useSignInData } from "../../../context/signin.context";

const FormFields = () => {
  // Get some stuff from the sign in context
  const { formData, setFormData } = useSignInData();

  const { email, password } = formData;

  // Input onchange handler
  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
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
          placeholder="Password"
          onChange={onChangeHandler}
        />
        <label htmlFor="lastname" className="text-gray-700">
          Password
        </label>
      </div>

      <button
        type="submit"
        className="inline-block px-7 py-3 h-14 bg-red-350 text-white font-semibold rounded shadow-md hover:bg-red-400 hover:shadow-lg focus:bg-red-500 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-full"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        Submit
      </button>
    </div>
  );
};

export default FormFields;
