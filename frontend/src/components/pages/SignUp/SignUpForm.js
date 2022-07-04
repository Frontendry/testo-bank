import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import Swiper React components for step change
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import AuthApi from "../../../api/auth";
import { useAuth } from "../../../context/auth.context";
import { useSignUpData } from "../../../context/signup.context";

// Sign up steps
import SignUpFormStep1 from "./SignUpFormStep1";
import SignUpFormStep2 from "./SignUpFormStep2";

const SignUpForm = () => {
  const [error, setError] = useState("");

  // Get current form data from useSignInData context
  const { formData } = useSignUpData();

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

    return navigate("/signin");
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      let response = await AuthApi.Register(formData);

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
        <Swiper slidesPerView={1}>
          <SwiperSlide>
            <SignUpFormStep1 />
          </SwiperSlide>
          <SwiperSlide>
            <SignUpFormStep2 />
          </SwiperSlide>
        </Swiper>
      </form>
    </>
  );
};

export default SignUpForm;
