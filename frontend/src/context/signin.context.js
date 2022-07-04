import React, { createContext, useContext, useState } from "react";

const SignInContext = createContext(null);

export const SignInContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  return (
    <SignInContext.Provider value={{ formData, setFormData }}>
      {children}
    </SignInContext.Provider>
  );
};

export const useSignInData = () => useContext(SignInContext);
