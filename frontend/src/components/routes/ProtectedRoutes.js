import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../../context/auth.context";

const ProtectedRoutes = ({ redirectPath = "/signin", children }) => {
  const { token } = useAuth();

  // If user details or token doesn't exist redirect to landing page
  if (!token || token === "") {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoutes;
