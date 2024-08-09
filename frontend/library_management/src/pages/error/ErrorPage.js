import React from "react";
import { useLocation } from "react-router-dom";
import Error from "@components/common/Error";

const ErrorPageWrapper = () => {
  const location = useLocation();
  const { errorTitle, errorDetails } = location.state || {
    errorTitle: "Unknown Error",
    errorDetails: "An unexpected error occurred.",
  };

  return <Error errorTitle={errorTitle} errorDetails={errorDetails} />;
};

export default ErrorPageWrapper;
