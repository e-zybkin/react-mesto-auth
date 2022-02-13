import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, loggedIn}) {
  if (loggedIn) {
    return children;
  }else{
    return <Navigate to="/sign-in"/>
  }
}

export default ProtectedRoute;
