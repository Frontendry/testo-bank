import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Local Imports
import AuthApi from "../../../api/auth";
import SignInContentAreaHeader from "./SignInContentAreaHeader";
import FormStepDescription from "../../general-components/FormStepDescription";
import FormFields from "./FormFields";
import { useAuth } from "../../../context/auth.context";
import { useSignInData } from "../../../context/signin.context";

const SignInForm = () => {
  const [error, setError] = useState("");

  // Get current form data from useSignInData context
  const { formData } = useSignInData();

  // Get setUser state from  useAuth context
  const { setUser, setToken } = useAuth();

  // Set Navigation
  const navigate = useNavigate();

  const setCurrentUser = (response) => {
    const userDetails = response.data;

    // Token-alone const token = JSON.stringify(userDetails.token);

    const token = JSON.stringify({
      tokenVal: userDetails.token,
      firstName: userDetails.firstname,
    });

    //setUser is imported from the useAuth context
    setUser(userDetails);

    //set the token in local storage & setToken
    localStorage.setItem("user", token);
    setToken(token);

    return navigate("/dashboard");
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      let response = await AuthApi.Login(formData);

      if (response.data && response.data.success === false) {
        //display error coming from server

        return setError(response.data.msg);
      }

      return setCurrentUser(response);
    } catch (error) {
      //display error originating from server / other sources
      console.log(error);
      if (error.response) {
        return setError(error.response.data.msg);
      }
      return setError("There has been an error.");
    }
  };
  return (
    <>
      <form
        className="w-100 overflow-hidden"
        autoComplete="off"
        onSubmit={onSubmitHandler}
      >
        <SignInContentAreaHeader
          desc="Don't have an account?"
          link="/"
          linkText="Sign Up"
        />

        <div className="mt-20 px-4 md:px-20 mx-auto w-full xl:w-3/5">
          <FormStepDescription
            title="Welcome back to Testo"
            subtitle="An account, with powerful, personalised tools
all in one place."
          />

          <FormFields />
        </div>
      </form>
    </>
  );
};

export default SignInForm;
