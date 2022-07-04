import React, { createContext, useContext, useState } from "react";

const SignUpContext = createContext(null);

export const SignUpContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    telPrefix: "",
    tel: "",
  });

  return (
    <SignUpContext.Provider value={{ formData, setFormData }}>
      {children}
    </SignUpContext.Provider>
  );
};

export const useSignUpData = () => useContext(SignUpContext);
