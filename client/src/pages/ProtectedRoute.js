import React from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const ProtectedRoute = ({ children }) => {
  const { token } = useAppContext();

  if (!token) {
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoute;
