import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  console.log("Token:", token); // Para verificar en consola

  return token ? children : <Navigate to="/home" />;
};

export default PrivateRoute;
